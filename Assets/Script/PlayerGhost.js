#pragma strict

function Start () {
	animation.Play("IdleGhost");
	yield WaitForSeconds(4.0);
	animation.Play("HeadHit");
	yield WaitForSeconds(4.0);
	animation.Play("HurricaneKick");
}

function Update () {

}