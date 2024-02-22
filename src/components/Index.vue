<template>
    <v-container>
        <v-main>
            <header id="header">
                <div class="header_contents">
                    <h1>LOGO</h1>
                    <div class="hamburger"><svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 1.07143C0 0.478795 0.478795 0 1.07143 0H13.9286C14.5212 0 15 0.478795 15 1.07143C15 1.66406 14.5212 2.14286 13.9286 2.14286H1.07143C0.478795 2.14286 0 1.66406 0 1.07143ZM0 6.42857C0 5.83594 0.478795 5.35714 1.07143 5.35714H13.9286C14.5212 5.35714 15 5.83594 15 6.42857C15 7.0212 14.5212 7.5 13.9286 7.5H1.07143C0.478795 7.5 0 7.0212 0 6.42857ZM15 11.7857C15 12.3783 14.5212 12.8571 13.9286 12.8571H1.07143C0.478795 12.8571 0 12.3783 0 11.7857C0 11.1931 0.478795 10.7143 1.07143 10.7143H13.9286C14.5212 10.7143 15 11.1931 15 11.7857Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
            </header>

        </v-main>


    </v-container>
</template>

<script>
export default {

}
</script>

<style>
#header {
    background: mediumaquamarine;
}

.header_contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hamburger {
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-application__wrap {
    align-items: center;
}

.v-main {
    width: 375px;
    height: 812px;
    background: rgb(192, 192, 192);
}</style>