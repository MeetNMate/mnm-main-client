<!-- <template>
  <header>
    <nav id="nav">
      <ul>
        <li
          v-for="item in items">
          <a :href="item.url"
            v-if="!item.childern">
            {{ item.name }}
          </a>
          <span
            v-else
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave">
              {{ item.name }}

              <ul class="dropdown"
                :class="{ isOpen }">
                  <li
                    v-for="child in item.children">
                    <a :href="child.url">
                      {{ child.name }}
                    </a>
                  </li>
              </ul>
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
var nav = new Vue({
  el: '#nav',
  data: {
      isOpen: false,
      items: [
          {
              url: '#home',
              name: 'Home'
          },
          {
              url: '#about',
              name: 'About'
          },
          {
              url: '#service',
              name: 'Service',
              children: [
                  {
                      url: '#service1',
                      name: 'Service1'
                  },
                  {
                      url: '#service2',
                      name: 'Service2'
                  },
                  {
                      url: '#service3',
                      name: 'Service3'
                  },
              ]
          },
          {
              url: '#contact',
              name: 'Contact'
          }
      ]
  },

  methods: {
      mouseover: function () {
          this.isOpen = true;
      },
      mouseleave: function () {
          this.isOpen = false;
      }
  }
});

</script> -->
