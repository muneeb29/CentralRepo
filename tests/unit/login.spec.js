import { mount } from '@vue/test-utils'
import Login from '../../src/views/Login.vue'
import { config } from '@vue/test-utils'
import News from '../../src/components/News.vue'

//We verify if Login.vue it shown for the user and also if the form login works good

config.global.components = {
  'News': News
}

describe('Login.vue', () => {
    test('does login it shown', () => {
        const wrapper = mount(Login,{
            stubs: ['router-link'],
            computed: {
                userLoggedIn: () => true,
                loginError: () => false,
                passwordInputEnabled: () => true,
            }
        })
        
        expect(wrapper.get('#login_form').isVisible()).toBe(true)
    })


    test('sets the value', async () => {
        const wrapper = mount(Login,{
            computed: {
                userLoggedIn: () => true,
                loginError: () => false,
                passwordInputEnabled: () => true,
            }
        })
        const email = wrapper.find('#emailID')
        const password = wrapper.find('#passwordID')

        await email.setValue('my@mail.com')
        await password.setValue('test2022')
        
        expect(email.element.value).toBe('my@mail.com')
        expect(password.element.value).toBe('test2022')
    })
})
  