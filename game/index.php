<?php include ('../head.inc.php')?>
<div class="spacer"></div>

<section class="col m-auto align-center gameboy border-radius-outside angle-Bot-R">
	<div class="barreH color-Grey shine-top"></div>
	<div class="liner color-Dark-Grey"></div>
	<div class="barreH color-Grey"></div>
	<div class="row justify-center">
		<div class="barreLat color-Grey"></div>
		<div id="reflet"></div>
		<div id="contourScreen" class="box row justify-center align-center">
			<div class="borderScreen col justify-center align-start">
				<div id="redLight"></div>
				<p class="small m-Top-10">BATTERY</p>
			</div>
			<div id="screen" class="col justify-between align-center">
				<p id="displayTop" class="displayScreen w-100 bold row justify-center align-center txt-center"></p>
				<div id="displayCenter" class="w-100">
					<p id="display1" class="displayScreen w-100 bold txt-center black"></p>
					<p id="display2" class="displayScreen w-100 bold txt-center black"></p>
					<p id="display3" class="displayScreen w-100 bold txt-center black"></p>
				</div>
				<div id="displayBot" class="displayScreen w-100 txt-center row justify-around align-center small">
					<p>B: Back</p>
					<p>A: Enter</p>
				</div>
			</div>
			<div class="borderScreen"></div>
		</div>
		<div class="barreLat color-Grey"></div>
	</div>
	<div class="barreH color-Grey"></div>
	<div class="barreH color-Grey"></div>
	<div class="row justify-center">
		<div class="barreLatBot color-Grey"></div>
		<div class="col croix">
			<div class="row">
				<div class="box square color-Grey"></div>
				<div id="arrow-Up" class="box square color-Black shine-top"></div>
				<div class="box square color-Grey"></div>
			</div>
			<div class="row">
				<div id="arrow-Left" class="box square color-Black shine-top"></div>
				<div class="box square color-Black"></div>
				<div id="arrow-Right" class="box square color-Black shine-top"></div>
			</div>
			<div class="row">
				<div class="box square color-Grey"></div>
				<div id="arrow-Down" class="box square color-Black"></div>
				<div class="box square color-Grey"></div>
			</div>
			<div class="row">
				<div class="box square color-Grey"></div>
				<div class="box square color-Grey"></div>
				<div class="box square color-Grey"></div>
			</div>
		</div>
		<div class="fill color-Grey"></div>
		<div class="row boutons color-Grey">
			<div class="containerBouton col align-center">
				<div class="fillerBouton"></div>
				<div id="buttonB" class="boutonsRouge box shine-top"><p class="rotateRed txt-center">B</p></div>
			</div>
			<div class="containerBouton col">
				<div id="buttonA" class="boutonsRouge box shine-top"><p class="rotateRed txt-center">A</p></div>
				<div class="fillerBouton"></div>
			</div>
		</div>
	</div>
	<div class="row justify-center">
		<div class="barreLatFoot"></div>
		<div class="box barreLatFoot row justify-around align-start p-Top-60">
			<div id="select" class="boutonsSelSta color-Dark-Grey"><p>SELECT</p></div>
			<div id="buttonStart" class="boutonsSelSta color-Dark-Grey"><p>START</p></div>
		</div>
		<div id="barreDeSon" class="barreLatFoot angle-Bot-R col align-start">
			<div class="sonBarre color-Dark-Grey m-Top-15"></div>
			<div class="sonBarre color-Dark-Grey m-Top-15"></div>
			<div class="sonBarre color-Dark-Grey m-Top-15"></div>
			<div class="sonBarre color-Dark-Grey m-Top-15"></div>
			<div class="sonBarre color-Dark-Grey m-Top-15"></div>
			<div class="sonBarre color-Dark-Grey m-Top-15"></div>
		</div>
	</div>
</section>
<div class="spacer"></div>
<script src="../script/script.js"></script>
<?php include ('../footer.inc.php') ?>