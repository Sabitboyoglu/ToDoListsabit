
<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <AppHeader />
    </header>

    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
