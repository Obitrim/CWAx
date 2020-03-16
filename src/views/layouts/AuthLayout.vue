<template>
    <div class="auth_layout bg_primary text_light">
        <div class="container p-3">

            <!-- header -->
            <header>
                <a 
                    href="#" 
                    class="text_light p-1"
                    @click.prevent="$router.go(-1)"
                    >
                    <i class="fa fa-angle-left"></i>
                </a>
                <div class="header_content">
                    <slot name="header-content"/>
                </div>
            </header>

            <!-- content -->
            <main>
                <slot />
            </main>

        </div>
    </div>
</template>
