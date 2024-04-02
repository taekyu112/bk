$(function(){

    function modalOn(){
        $(".modal_back").addClass("back_on");
       // $("body").addClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    function modalOff(){
        $(".modal_back").removeClass("back_on");
      //  $("body").removeClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    $(".hm img").click(function(){
        modalOn();
    });
    $(".cross").click(function(){
        modalOff();
    });
    
});


$(function(){
 
    $( ".hm img" ).click(function() {
        $(".menu").animate({marginRight:"75%"}, 300);
		$(".cross").stop().show().css("color","#fff");
     });	
    
     // 메뉴상세
     $(".mm >li> a").click(function(){
        
        if($(this).next().is(":visible"))
        {
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/ico_nav.png");
        }else{

        $(".sub").stop().slideUp(500);
        $(".menu  ul.mm >li> a").children("img").attr("src","img/ico_nav.png");
        $(this).next().stop().slideDown(500);
        $(this).children("img").attr("src","img/ico_nav_on.png");
        };	

     });


     // 메뉴종료
     $( ".cross" ).click(function() {
        $(".menu").animate({marginRight:"0"}, 300);
	//	$( ".hm img" ).stop().show();
			$(".cross").stop().hide();
   });

});


$(function(){

    function modalOn(){
        $(".modal_back").addClass("back_on");
       // $("body").addClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    function modalOff(){
        $(".modal_back").removeClass("back_on");
      //  $("body").removeClass("body_lock");   // body ��ũ�Ѿȵ�
    }
    $(".hm img").click(function(){
        modalOn();
    });
    $(".cross").click(function(){
        modalOff();
    });
    
});

const slides = document.querySelector('#slide'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('#slide li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 300; //한개의 슬라이드 넓이
const slideMargin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 400 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});
