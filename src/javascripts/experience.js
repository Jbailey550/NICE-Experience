import pluginAutoLoader from "./plugin-autoloader";
import Tabs from "./../components/tabs/tabs.js";
import Tracker from "./tracker";
import pluginizr from "./pluginizr";
import eventr from "./eventr";

let experience = {
	init: (el: $) => {

		// Load all component modules from this directory automatically, see http://stackoverflow.com/a/31770875/486434
		// But exclude test files http://stackoverflow.com/a/30372240
		pluginAutoLoader.load(require.context("./../components/", true, /^((?!test\.).)*\.js$/igm));
		pluginAutoLoader.load(require.context("./", true, /^((?!test\.).)*\.js$/igm));

		pluginAutoLoader.findPlugins(el);
	},
	// Components
	Tabs: Tabs,
	Tracker: Tracker,
	// Utils
	pluginAutoLoader: pluginAutoLoader,
	pluginizr: pluginizr,
	eventr: eventr
};

$.fn.experience = function() {
	experience.init(this);
};

// Export to global namespace for precompiled usage
window.NICE = window.NICE || {};
window.NICE.experience = experience;

export {
	experience as default,
	// Components
	Tabs,
	Tracker,
	// Utils
	pluginAutoLoader,
	pluginizr,
	eventr
};
