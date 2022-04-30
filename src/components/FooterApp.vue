<template>
  <footer class="footer-main">
    <div class="footer-second-part">
      <a href="https://github.com"
      ><fa :icon="['fab', 'github-square']" class="icons"
      /></a>
      <a href="https://youtube.com"
      ><fa :icon="['fab', 'youtube']" class="icons"
      /></a>
      <a href="https://vk.com">
        <fa :icon="['fab', 'vk']" class="icons" />
      </a>
      <a href="https://twitter.com"
      ><fa :icon="['fab', 'twitter']" class="icons"
      /></a>
    </div>
    <div class="footer-first-part">
      <p class="footer-links">
        <a class="link-first" href="#" @click="$router.push('/')">Главная</a>
        <a href="#" @click="$router.push('/about')">О нас</a>
        <a href="#" @click="$router.push('/blog')">Блог</a>
        <a href="#" @click="$router.push('/form')">Форма</a>
        <a href="#" @click="$router.push('/map')">Карта</a>
        <a href="#" @click="$router.push('/contacts')">Контакты</a>
        <a href="#" @click="$router.push('/faq')">Faq</a>
      </p>
      <p>Copyright Svalka &copy; 2022</p>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss">

.icons {
  font-size: 30px;
  color: white;
}
.a {
  padding-right: 5px;
}
.footer-main {
  background-color: #7a2020;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
}

.footer-main .footer-first-part p {
  color: #ffffff;
  font-weight: lighter;
  font-size: 14px;
  margin: 0;
}

.footer-main p.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease 0.25s;
}

.footer-main p.footer-links {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  transition: ease 0.25s;
  margin: 0 0 10px;
}

.footer-main .footer-links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}

.footer-main .footer-links .link-first:before {
  content: none;
}

.footer-main .footer-second-part {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}
.footer-main .footer-second-part a:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.footer-main .footer-second-part a {
  display: inline-block;
  width: 35px;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  height: 35px;
  background-color: #5f1610;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  transition: all 0.25s;
}

.footer-main p.footer-links a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .footer-main .footer-first-part,
  .footer-main .footer-second-part {
    text-align: center;
  }
  .footer-main .footer-second-part {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-main .footer-first-part p.footer-links {
    line-height: 1.8;
  }
}
</style>