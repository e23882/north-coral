
		function testcookie()
		{
			//alert(document.cookie);
			if(document.cookie.indexOf("Family")!=-1&&document.cookie.indexOf("Color")!=-1&&document.cookie.indexOf("Size")!=-1)
			{
				var sz = document.cookie.slice((document.cookie.indexOf("Size"))+5,(document.cookie.indexOf("Family"))-2)+"px";
				var col = document.cookie.slice((document.cookie.indexOf("Color"))+6,(document.cookie.indexOf("Size"))-2);
				var fmy = document.cookie.slice((document.cookie.indexOf("Family"))+7,(document.cookie.length));
				//alert("size:"+sz+"\n"+"col:"+col+"\n"+"family:"+fmy);
				document.getElementById("content").style.cssText="font-size:"+sz;
				document.getElementById("fmy").style.cssText="background-color:"+col;
				document.getElementById("fmy").style.fontFamily = fmy;
				document.getElementById("plsfmy").value = fmy;
				document.getElementById("plscol").value = col;
				document.getElementById("plssz").value = size;
				/*alert(document.cookie+"\n"
				+document.cookie.indexOf("Family")+"\n"
				+document.cookie.indexOf("Size")+"\n"
				+document.cookie.indexOf("Color")+"\n"
				+document.cookie.length+"\n"
				+document.cookie.slice((document.cookie.indexOf("Color"))+6,(document.cookie.indexOf("Size"))-2)+"\n"
				+document.cookie.slice((document.cookie.indexOf("Size"))+5,(document.cookie.indexOf("Family"))-2)+"\n"
				+document.cookie.slice((document.cookie.indexOf("Family"))+7,(document.cookie.length))+"\n"
				);*/
			}
		}
		
		function reset()
		{
			chgbgcolor();
		}
		function chgSize()
		{
			var dt = document.getElementById("content");
			dt.style.cssText="font-size:"+document.chformat.tbSize.value+"px";
			beginDate = new Date();
			endDate = new Date();
			endDate.setDate(beginDate.getDate()+365);
			document.cookie="Size="+document.chformat.tbSize.value+";expires="+endDate.toUTCString();
			//alert(document.cookie);
		}
		function chgfmy()
		{
			var dt = document.getElementById("fmy");
			dt.style.fontFamily=document.chformat.tbFontfmy.value;
			//dt.style.cssText="font-family:"+document.chformat.tbFontfmy.value;
			beginDate = new Date();
			endDate = new Date();
			endDate.setDate(beginDate.getDate()+365);
			document.cookie="Family="+document.chformat.tbFontfmy.value+";expires="+endDate.toUTCString();
			//alert(document.cookie);
		}
		function chgbgcolor()
		{
			var dt = document.getElementById("fmy");
			//dt.style.fontFamily=document.chformat.tbColor.value;
			dt.style.cssText="background-color:"+document.chformat.tbColor.value;
			beginDate = new Date();
			endDate = new Date();
			endDate.setDate(beginDate.getDate()+365);
			document.cookie="Color="+document.chformat.tbColor.value+";expires="+endDate.toUTCString();
			//alert(document.cookie);
		}
		$(function(){
			var sideslider = $('[data-toggle=collapse-side]');
            var get_sidebar = sideslider.attr('data-target-sidebar');
            var get_content = sideslider.attr('data-target-content');
            sideslider.click(function(event){
				$(get_sidebar).toggleClass('in');
                $(get_content).toggleClass('out');
            });
			});
		$(function()
		{
			$('a.goHOME').click(function()
			{
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({scrollTop: 0}, 600);
		 
				return false;
			});
		});
		function fadeout()
		{
			$('.shake').fadeToggle(1);
			$('.shake').fadeToggle(6000);
				
		}
		function slide()
		{
			$('.content').toggle(1);
			$('.content').toggle("slow");
			$('.firstContentTable').toggle(1);
			$('.firstContentTable').toggle("slow");
		}
