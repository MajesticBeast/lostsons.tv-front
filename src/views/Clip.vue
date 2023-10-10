<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const id = route.params.id;

type Clip = {
    id: string;
    playback_id: string;
    desc: string;
    game: number;
};

const error = ref<string | null>(null)
const clips = ref<Clip[]>([])

const load = async () => {
    try {
        let data = await fetch('http://localhost:3000/clips/')
        if (!data.ok) {
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

<template>
    <div class="w-full bg-gray-950">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 bg-gray-950">
            <div class="w-full inline-block mx-5 my-5 test bg-gray-950 border-b-2">
                <mux-player :playback-id="id" stream-type="on-demand" class="small-video-player" />
                <div class="px-6 py-4">
                    <div class="font-bold text-gray-300 text-xl mb-2">Overwatch</div>
                    <p class="text-gray-600 text-base">
                        IvoryGUN sleeps on the job.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span
                        class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#sleep</span>
                    <span
                        class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#slept</span>
                    <span
                        class="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#hog</span>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.small-video-player {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
</style>
