<template lang="pug">
	.pm-navpane
		.pm-navpane-toolbar
			.btn-group
				button.btn.btn-outline-light.pm-btn-block(type="button")
					span {{browsePlaceholder}}
				button.btn.btn-outline-light(type="button")
					i.far.fa-fw.fa-folder-open(aria-hidden="true")
		.pm-navpane-content
			p test
			p test
			p test
			p test
			p test
			p test
			p test
			p test
			p test
			p test
			p test
			p test
		.pm-navpane-toolbar
			.input-group
				input.form-control(type="text", placeholder="Search", aria-label="Search")
				span.input-group-btn
					button.btn.btn-outline-light(type="button")
						i.far.fa-fw.fa-search(aria-hidden="true")
</template>

<script>
export default {
    data () {
        return {
            browsePlaceholder: 'Open Portfolio Root'
        }
    }
}
</script>
