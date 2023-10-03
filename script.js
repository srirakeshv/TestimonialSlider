const testimonials=[
    {
        testimonial:`“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        name_test:'Tanya Sinclair',
        designation:'UX Engineer',
        img:'images/image-john.jpg'
    },
    {
        testimonial:`“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name_test:'John Tarkpor',
        designation:'Junior Front-end Developer',
        img:'images/image-tanya.jpg'
    },
]

let i=0
let j=testimonials.length

let previous=document.querySelector('#previous')
let next=document.querySelector('#next')
let para=document.querySelector('p')
let name=document.querySelector('h4')
let role=document.querySelector('h5')
let image=document.querySelector('#profile')

previous.addEventListener('click',()=>{
    i=(i+j+1)%j
    displayTestimonial()
})

next.addEventListener('click',()=>{
    i=(i+j-1)%j
    displayTestimonial()
})

function displayTestimonial(){
    para.innerHTML=testimonials[i].testimonial
    name.innerHTML=testimonials[i].name_test
    role.innerHTML=testimonials[i].designation
    image.src=testimonials[i].img
}
window.onload=displayTestimonial