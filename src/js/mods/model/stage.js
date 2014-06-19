/**
 * @fileoverview 场景公共数据
 * @authors liangdong2 <liangdong2@staff.sina.com.cn>
 */
define('mods/model/stage',function(require,exports,module){

	var $model = require('lib/mvc/model');

	var Stage = $model.extend({
		currentTab : 'data'
	});

	module.exports = Stage;

});

