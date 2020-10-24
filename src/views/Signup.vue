<template>
    <div class="vue-tempalte">
        <form>
            <h3>{{ $t('signUp.heading') }}</h3>

            <div class="form-group">
                <label>{{ $t('label.sirName') }}</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>{{ $t('label.lastName') }}</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>{{ $t('label.email') }}</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>{{ $t('label.password') }}</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">{{ $t('button.signUp') }}</button>

            <p class="forgot-password text-right font-weight-bold">
                <router-link :to="'/' + $i18n.locale + '/'">{{ $t('signUp.alreadyRegistered') }}</router-link>
            </p>
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