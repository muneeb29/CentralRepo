import { shallowMount } from '@vue/test-utils'
import Navbar from '../../src/components/Navbar.vue'

//We verify if Navbar.vue it shown for the user 

describe('Navbar.vue', () => {
    test('does navbar it shown', () => {
        const wrapper = shallowMount(Navbar,{
            stubs: ['router-link', 'router-view'],
            computed: {
                userLoggedIn: () => true,
            }
        })
        
        expect(wrapper.get('.navbar').isVisible()).toBe(true)
    })
})
  