<template>
    <div class="vue-tempalte">
        <form>
            <h3>{{ $t('signIn.heading') }}</h3>

            <div class="form-group">
                <label>{{ $t('label.email') }}</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>{{ $t('label.password') }}</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">{{ $t('button.signIn') }}</button>

            <div class="form-group">
              <p class="forgot-password float-left mt-2 mb-4 font-weight-bold">
                <router-link :to="'/' + $i18n.locale + '/signup'">{{ $t('link.signUp') }}</router-link>
            </p>
              <p class="forgot-password float-right mt-2 mb-4 font-weight-bold">
                <router-link :to="'/' + $i18n.locale + '/forgot-password'">{{ $t('link.forgotPassword') }}</router-link>
            </p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>