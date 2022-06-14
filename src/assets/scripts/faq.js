const accordeon = $(".accordeon dd");
accordeon.hide().prev().on("click", (e) => {
	const $this = $(e.currentTarget);
	$this.parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$this.next().not(":visible").slideDown().prev().addClass("active");
});
