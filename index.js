const parent=document.querySelector('.faq')

parent.addEventListener('click', function(e)
{
  const child= e.target.querySelector('.child')
if (e.target.tagName==='DIV') {
    child.classList.toggle('hidden')
}})