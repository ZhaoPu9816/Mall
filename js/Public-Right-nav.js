document.writeln("		<!--右导航-->");
document.writeln("		<div class=\'right-nav\'>");
document.writeln("			<!--个人中心-->");
document.writeln("			<div class=\'grzx\'>");
document.writeln("				<a>");
document.writeln("					<i class=\'iconfont icon-gerenzhongxin\'></i>");
document.writeln("				</a>");
document.writeln("				<div class=\'grzx-t\'>");
document.writeln("					<a href=\'Member.html' html\'>进入个人中心</a>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<!--购物车-->");
document.writeln("			<div class=\'gwc\'>");
document.writeln("				");
document.writeln("				<a>");
document.writeln("					<i class=\'iconfont icon-gouwuche\'></i> 购物车");
document.writeln("				</a>");
document.writeln("				<div class=\'gwc-label\'>");
document.writeln("					<span>2</span>");
document.writeln("				</div>");
document.writeln("				");
document.writeln("			</div>");
document.writeln("			");
document.writeln("			<div class=\'shoppingCart\'>");
document.writeln("");
document.writeln("				<div class=\'allwares\'>");
document.writeln("					<div class=\'shoppingCart-title\'>");
document.writeln("						<a href=\'Mycart.html\'>购物车</a>");
document.writeln("					</div>");
document.writeln("");
document.writeln("					<div class=\'wares\'>");
document.writeln("						<img src=\'img/404zfx.jpg\' />");
document.writeln("						<div class=\'wares-text\'>");
document.writeln("							<p>商品名称</p>");
document.writeln("							<span>$999</span>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("					<div class=\'wares\'>");
document.writeln("						<img src=\'img/404zfx.jpg\' />");
document.writeln("						<div class=\'wares-text\'>");
document.writeln("							<p>商品名称</p>");
document.writeln("							<span>$999</span>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("");
document.writeln("				<div class=\'total\'>");
document.writeln("					<span>总价：</span>");
document.writeln("					<span>1998</span>");
document.writeln("				</div>");
document.writeln("");
document.writeln("			</div>");
document.writeln("");
document.writeln("			<!--客服-->");
document.writeln("			<div class=\'kf\'>");
document.writeln("				<a>");
document.writeln("					<i class=\'iconfont icon-kefu\'></i>");
document.writeln("				</a>");
document.writeln("				<div class=\'kf-t\'>");
document.writeln("					<p>客服</p>");
document.writeln("					<p>客服电话：800-8820</p>");
document.writeln("					<p>当然，你打不通</p>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<!--二维码-->");
document.writeln("			<div class=\'ewm\'>");
document.writeln("				<a>");
document.writeln("					<i class=\'iconfont icon-erweima\'></i>");
document.writeln("				</a>");
document.writeln("				<div class=\'ewm-t\'>");
document.writeln("					<img src=\'img/ewm.png\' />");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<!--底部三角-->");
document.writeln("			<div class=\'dbjt\'>");
document.writeln("				<div class=\'dbjt-t\'>");
document.writeln("					<img src=\'img/xsjt.png\' width=\'40px\' height=\'18px\' />");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("		</div>");

//滑出购物车
$(document).ready(function() {
	$('.gwc').click(function() {
		$('.shoppingCart').animate({width: 'toggle'}, 500);
	});
});