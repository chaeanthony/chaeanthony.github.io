/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			fontSize: {
				xxs: "8px",
				"clamp-md": "clamp(12px, 3vw, 16px)",
				"clamp-lg": "clamp(18px, 3vw, 22px)",
				"clamp-xl": "clamp(24px, 3vw, 28px)",
				"clamp-xxl": "clamp(36px, 3vw, 42px)",
			},
		},
	},
	plugins: [],
};
