#pragma strict

var anim: Animator;

function Start () {
	anim = GetComponent("Animator");
}

function Update () {
	anim.Play("kick");
/*
	if (Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W)){

        anim.Play("kick");

    }
    
    else if (Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S)){

        animation.Play(); 

    }
    else if (Input.GetKeyDown(KeyCode.LeftArrow) || Input.GetKeyDown(KeyCode.A)){

        animation.Play(); 

    }
    else if (Input.GetKeyDown(KeyCode.RightArrow) || Input.GetKeyDown(KeyCode.D)){

        animation.Play(); 

    }
*/
}