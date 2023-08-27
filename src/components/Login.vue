<template>
   <div>
    <h1>Login Page</h1>
        <form id="frm" name="frm" method="post" action="#">
            <input type="text" id="userid" name="userid" class="LoginText" placeholder="사용자 아이디 " v-model="userid2" ref="ref-userid2"><br/>
            <input type="password" id="userpw" name="userpw" class="LoginText" placeholder="사용자 비밀번호" v-model="userpw2" ref="ref-userpw2"><br/>
        </form>
        <button id="userLoginBtn" class="LoginText" v-on:click="showInputValue">로그인</button>
        <p id="result1" class="msg">{{ message1 }}</p>
        <p id="result2" class="msg">{{ message2 }}</p>
        <p id="result3" class="msg">{{ message3 }}</p>
        <h3>vue 와 nxkey 의 충돌 </h3>
        <ul>
            <li>1. vue의 component가 처음 마운트될 때에만 mounted 훅이 호출됩니다. <br/> 처음 페이지 진입시 키보드 보안 로드를 하면 정상 </li>
            <li>2. 하지만 같은 vue의 component를 재 접근하면, 이미 component는 "rendering"이 되었기 때문에 
            키보드 보안 함수를 재 실행시켜도 새롭게 바뀐 페이지 input을 인식 을 할 수 없다<br/>
            따라서. 이미 호출이 된 페이지이어서 loadflag값이 true입니다,  loadflag이 true이면 기존 페이지가 재차 호출이 된것이므로,
            DOM이 새로 생성된걸로 확인이 가능합니다 TK_Rescan함수를 사용하면 해결이 된다</li>
            <li>3. 키보드 보안 제품 적용 페이지는 v-model, ref 사용이 불가능 합니다, <br/>
                키보드보안에서 input의 모든 이벤트를 제어하기 때문에 v-model같은 양방향 데이터 바인딩 기능은 실시간 변화 감지가 불가능하므로 값을 가져올 수 없습니다
            </li>
        </ul>


    </div>
</template>

<script>
    export default {
        name: 'login-form',
        mounted(){
            if(window.loadflag == true){
                window.TK_Rescan();
           }else{
            window.TK_Loading();
           }
           
        },
        data(){
            return {
                message1:'',
                message2:'',
                message3:'',
            }
        },
        methods:{
            showInputValue(){
                const userid = document.getElementById('userid');
                const userpw = document.getElementById('userpw');

                console.log('showInputValue()')
                console.log(this.userid2, this.userpw2);
                this.message1=`use v-model attribute!!! userid value: ${this.userid2}, userpw value: ${this.userpw2}`;
                this.message2=`use ref!! userid value: ${this.$refs.userid2}, userpw value ${this.$refs.userpw2};`;
                this.message3=`use getElementById!! userid value: ${userid.value}, userpw value ${userpw.value};`;
            }
        }

    }
</script>

<style>
    .LoginText{
        height: 40px;
        width: 400px;
        margin-top: 5px;
        font-size: 20px;
    }
    .msg{
        background: lightyellow;
    }

</style>