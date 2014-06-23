/**
 * @fileoverview 数据视图
 * @authors liangdong2 <liangdong2@staff.sina.com.cn>
 */
define('mods/view/diagramPanel',function(require,exports,module){

	var $view = require('lib/mvc/view');
	var $stage = require('mods/model/stage');

	var TPL = {
		box : [
			'<section class="box sec-ctrl" style="display:none;">',
				'<h3>数据视图</h3>',
			'</section>'
		]
	};

	var DiagramPanel = $view.extend({
		defaults : {
			name : 'view',
			parent : null,
			template : TPL.box
		},
		build : function(){
			this.insert();
			this.checkVisible();
		},
		insert : function(){
			var conf = this.conf;
			this.role('root').appendTo($(conf.parent));
		},
		setEvents : function(action){
			var proxy = this.proxy();
			this.delegate(action);
			$stage[action]('change:currentTab', proxy('checkVisible'));
		},
		checkVisible : function(){
			var conf = this.conf;
			var root = this.role('root');
			var current = $stage.get('currentTab');
			if(conf.name === current){
				root.show();
			}else{
				root.hide();
			}
		}
	});

	module.exports = DiagramPanel;

});

