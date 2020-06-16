<template>
	<div class="p-4 bg-white">
        <h1>{{viewTitle}}</h1>
        <div class="alert alert-info mt-4">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
	props: {
		viewTitle: {
			type: String,
			default: 'View Title'
		}
	}
};
</script>