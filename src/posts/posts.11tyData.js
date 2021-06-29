const ALPHABETICAL_RE = new RegExp("[^a-zA-Z0-9 -]");

module.exports = {
	layout: "post",
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title,
			title: (data) => data.title,
		},
		tags: ({ category, tags }) => {
			if (tags) {
				return tags;
			} else {
				return [category.replace(ALPHABETICAL_RE, "").toLowerCase()];
			}
		},
	},
};
