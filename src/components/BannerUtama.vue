<template>
  <div>
    <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
    <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
    <br />
    <v-carousel cycle hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <!-- <v-row class="title fill-height hidden-xs-only pa-md-10" align="end" justify="left">{{ item.title }}</v-row> -->
        <v-container fill-height fluid pa-10 ma-0 pb-3>
        <!-- <v-row class="text-h3" align="end" justify="">{{ item.title }}</v-row>
        <v-row class="text-h5" align="end" justify="left">{{ item.subtitle }}</v-row> -->
          <v-layout fill-height align-end pb-4 mb-4>
            <v-flex xs12>
              <span class="text-h3 black--text" v-text="item.title"></span>
              <br />
              <span class="text-h5 black--text" v-text="item.subtitle"></span>
              <span class="text-h5 black--text" v-text="item.time"></span>
            </v-flex>
          </v-layout>
        </v-container>

      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "BannerUtama",
  data() {
    return {
      items: [
        {
          src: require("../assets/background.jpeg"),
          title: "Berita Terkini",
          subtitle: "3 september 2021",
          time: ", 20:21"
        },
        {
          src: require("../assets/background.jpeg"),
          title: "Berita Terupdate",
          subtitle: "3 september 2021",
          time: ", 20:21"
        },
        {
          src: require("../assets/background.jpeg"),
          title: "Berita Terpercaya",
          subtitle: "3 september 2021",
          time: ", 20:21"
        }
      ]
    };
  }
};
</script>