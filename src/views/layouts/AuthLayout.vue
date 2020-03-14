<template>
    <div class="auth_layout bg_primary text_light">
        <div class="container p-3">

            <!-- header -->
            <header class="pb-4">
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
