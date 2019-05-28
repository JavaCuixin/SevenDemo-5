/***
 * 标题：多图片上传预览插件
 * 编写时间：2015年10月28号
 * 作者：小乔
 * 邮箱：928737715@qq.com
 * version:1.0
 ***/

(function($){
	var defaults={
		fileInputName:'file',
		pictureInputName:'picture',
		initValue:[],
		isMulti:false,
		width:null,
		height:null,
		controllbarHeight:null,
		controllbarFontSize:null,
		uploadPath:null,
		callback:null
	};

	var imageEdit = null;
	var contentStyle = '';
	var uploadStyle = '';
	var cancelStyle = '';

	$.fn.extend({
		upload:function(options){
			var opts=$.extend(defaults,options);
			var fileInputName = opts.fileInputName;
			var pictureInputName = opts.pictureInputName;
			var initValue = opts.initValue;
			var isMulti = opts.isMulti;
			var width = opts.width;
			var height = opts.height;
			var controllbarHeight = opts.controllbarHeight;
			var controllbarFontSize = opts.controllbarFontSize;
			var uploadPath = opts.uploadPath;
			var callback = opts.callback;
			var thisObj = $(this);
			if(width) {
				contentStyle += 'width:' + width + ';';
			}
			if(height) {
				contentStyle += 'height:' + height + ';';
			}
			if(controllbarHeight) {
				uploadStyle += 'height:' + controllbarHeight + ';line-height:' + controllbarHeight + ';';
				cancelStyle += 'height:' + controllbarHeight + ';line-height:' + controllbarHeight + ';';
			}
			if(controllbarFontSize) {
				uploadStyle += 'font-size:' + controllbarFontSize + ';';
				cancelStyle += 'font-size:' + controllbarFontSize + ';';
			}

			var uploadContainer = $('<div class="myupload-container">' +
				'</div>');
			thisObj.append(uploadContainer);

			var uploadButton = $('<div class="table" role="myupload-file-input-btn">' +
            		'<div class="content table-cell" style="' + contentStyle + '">' +
                	'<img src="../images/personal_03.png" id="imga">' +
            		'</div>' +
        			'</div>');
			if(initValue.length > 0 && !isMulti) {//如果有初始值并且是单图模式则隐藏上传按钮
				uploadButton.hide();
			}
			uploadContainer.append(uploadButton);

			var uploadForm = $('<form action="#" enctype="multipart/form-data" method="post" role="myupload-file-form">' +
            		'<input type="file" name="'+fileInputName+'" role="myupload-file-input" accept="image/*" style="display:none;"/>' +
            		'</form>');			
			uploadContainer.append(uploadForm);

			if(initValue.length > 0) {
				for(var i=0;i<initValue.length;i++) {
					thisObj.imagePreview(pictureInputName,initValue[i],isMulti,uploadButton,uploadForm,uploadContainer);
				}
			}

			thisObj.find('div[role="myupload-file-input-btn"]').click(function(){
				imageEdit = null;
				uploadForm.find('input[type="file"]').val('').trigger("click");
			});

			uploadForm.find('input[type="file"]').change(function(){
				uploadForm.ajaxSubmit({
						url:uploadPath,
						dataType: "json",
						success : function(data,status){
							if(data.result){
								if(imageEdit) {
									imageEdit.find('input[role="myupload-picture-input"]').val(data.path);
									imageEdit.find('img[role="myupload-picture-show"]').attr("src",data.path);
								}else{
									$('#imga').attr('src',data.path);
									// console.log(data.path)
									callback(data.path);
								}				
								//改				
							}else{
								if(callback) {
									callback(data.errormsg);
								}
							}
						}
				})
			})
		},

		imagePreview : function(p,d,i,b,f,c) {
			var imagePreview = $('<div class="table" style="position:relative;">' +   
            			'<div class="content table-cell" style="' + contentStyle + '">' +
                		'<img src="#" role="myupload-picture-show"/>' +
            			'</div>' +
            			'<div class="mask" style="display:none;"></div>' +
            			'<div class="controllbar table" style="display:none;">' +
                		'<div class="upload table-cell" style="' + uploadStyle + '">重新上传</div>' +
                		'<div class="cancel table-cell" style="' + cancelStyle + '">删除</div>' +
            			'</div>' +
            			'<input type="text" name="' + p + '" role="myupload-picture-input" value="" style="display:none;"/>' +
        				'</div>');

			imagePreview.hover(function() {
				$(this).find('.mask, .controllbar').show();
			}, function() {
				$(this).find('.mask, .controllbar').hide();
			});

			imagePreview.find('.upload').click(function() {
				imageEdit = $(this).parent().parent();
				f.find('input[type="file"]').val('').trigger("click");
			});

			imagePreview.find('.cancel').click(function() {
				$(this).parent().parent().remove();
				if(!i) {
					b.show();
				}
			});

			imagePreview.find('input[role="myupload-picture-input"]').val(d);
			imagePreview.find('img[role="myupload-picture-show"]').attr("src",d);

			if(!i) {
				b.hide();
			}
			c.prepend(imagePreview);
		}
	})
})(jQuery);



