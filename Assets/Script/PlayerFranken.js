#pragma strict

function Start () {
	animation.Play("Look");
	yield WaitForSeconds(4.0);
	animation.Play("Kick");
}

function Update () {

}