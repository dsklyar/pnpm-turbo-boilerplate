module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  presets: [require("tailwind-config/tailwind.config.js")],
  theme: {
		extend: {
			colors: {
				red: "#ff0000"
			}
		}
	},
};
