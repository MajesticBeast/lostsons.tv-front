<script setup lang="ts">
import "@mux/mux-player";
import { ref } from "vue";

type Clip = {
    id: string;
    playback_id: string;
    asset_id: string;
    date_uploaded: string;
    description: string;
    user_id: string;
    game_id: string;
    tags: string;
    featured_users: string;
    game: number;
    username: string;
};

const error = ref<string | null>(null)
const clips = ref<Clip[]>([])

const load = async () => {
    try {
        let data = await fetch('https://lostsons.tv/clips')
        if (!data.ok) {
            console.log("Failed fetching clips")
            throw Error('Failed fetching clips')
        }
        clips.value = await data.json()
    }
    catch (err) {
        error.value = err.message
        console.log(err.value)
    }
}

load()

</script>

<style scoped>
.small-video-player {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

mux-player {
    --bottom-controls: none;
}

.test:not(:hover) {
    --controls: none;
}

.test:hover {
    position: relative;
    z-index: 10;
    --duration-display: none;
}
</style>

<template>
    <div class="w-full bg-gray-950">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 bg-gray-950">
            <div v-for="clip in clips" :key="clip.id"
                class="max-w-sm inline-block mx-5 my-5 test border-gray-700 bg-gray-950 rounded-md border-2 transform hover:scale-150 transition duration-300">
                <mux-player class="small-video-player" stream-type="on-demand" :playback-id="clip.playback_id" />
                <div class="px-6 py-4">
                    <div class="font-bold text-gray-300 text-lg mb-2">{{ clip.game }}</div>
                    <p class="text-gray-600 text-sm">
                        {{ clip.description }}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span
                        class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#ambush</span>
                    <span
                        class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#orgrimmar</span>
                    <span
                        class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#druid</span>
                </div>
            </div>
        </div>
    </div>
</template>

