<template>
  <div class="news">
    <h1 class="border border-3">Latest News</h1>
    <div v-for="news in newsList.items" :key="news.id">
      <div class="container bg-light border border-4">
        <div class="row">
          <div class="container bg-dark fw-bold text-white">
            {{ news.title }}
          </div>
          <div class="">
            <div class="col text-right">
              <p class="fw-bold text-right">Written On: {{ news.pubDate }}</p>
            </div>
          </div>
          <div class="col">
            <img
              class="img-fluid rounded"
              :src="news.enclosure.link"
              alt="news images"
            />
          </div>

          <div class="col-md-8">
            <p class="text-left">{{ news.description }}</p>
          </div>

          <div class="col">
            <a class="btn border" :href="news.link" target="_blank" rel="noreferrer noopener"> View More...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "News",

  async setup() {
    const newsList = ref(null);
    const newsResp = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.news-medical.net%2Ftag%2Ffeed%2FCardiomyopathy.aspx"
    );

    newsList.value = await newsResp.json();
    return { newsList };
  },
};
</script>
