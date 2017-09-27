<template>
    <div>
        <template v-if="!isLoading">
            <md-card v-for="feed in feeds" :key="feed.id">
                <md-card-media>
                    <img :src="feed.images.standard_resolution.url">
                </md-card-media>

                <md-card-header v-if="feed.caption">
                    <div class="md-title">{{ feed.caption.from.full_name }}</div>
                    <div class="md-subhead">@{{ feed.caption.from.username }}</div>
                </md-card-header>

                <md-card-content>
                    {{ feed.caption.text }}
                </md-card-content>
            </md-card>
        </template>
        <template v-else>
            <md-progress class="md-accent" md-indeterminate></md-progress>
        </template>
    </div>
</template>

<script>
    import jsonp from 'jsonp'

    export default {
        name: 'MyFeed',
        data() {
            return {
                isLoading: true,
                feeds: []
            }
        },
        mounted() {
            const token = localStorage.getItem('token')
            this.isLoading = true
            jsonp(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`, null, (_, response) => {
                this.isLoading = false
                this.feeds = response.data
            })
        }
    }
</script>