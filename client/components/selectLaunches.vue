<template>
	<v-select
		:class="selectClass"
		:items="items"
		density="comfortable"
		:label="label"
		@update:model-value="emit('handle-change', $event, selectType)"
	/>
</template>
<script setup lang="ts">
defineProps({
	items: { type: Array<string | number>, default: () => [] },
	selectClass: { type: String, default: '' },
	label: { type: String, default: '' },
	selectType: { type: String, default: '' },
})

const emit = defineEmits(['handle-change'])
</script>
