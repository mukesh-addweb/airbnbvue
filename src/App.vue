<template>
<nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-dark shadow sm:items-baseline w-full">

  <div class="mb-2 sm:mb-0 flex flex-row
  ">
    <div class="h-10 w-10 self-center mr-2">
      <img class="h-10 w-10 self-center" src="https://csscomps.com/images/csscomps.png" />
    </div>
    <div>
      <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Addweb</a><br>
      <span class="text-xs text-grey-dark">Lets talk solution</span>
    </div>
  </div>

  <div class="relative text-gray-600">
    <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
      <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
      </svg>
    </button>
  </div>

  <div class="sm:mb-0 self-center">
    <!-- <div class="h-10" style="display: table-cell, vertical-align: middle;"> -->
      <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <a href="#" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Link1</a>
    <a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Link2</a> -->
    <!-- <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About Us</a> -->
    <!-- <a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Link3</a> -->
    <!-- </div> -->

  </div>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
