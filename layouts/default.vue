<template>
  <div class="fixed left-0 top-0 w-screen h-dvh flex flex-col">
    <header>
      <AppHeader />
    </header>
    <div class="w-full h-full flex flex-col">
      <slot />
    </div>
    <footer>
      <AppFooter />

    </footer>
  </div>
</template>