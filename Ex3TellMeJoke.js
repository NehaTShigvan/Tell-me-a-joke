let jokes = [`What do you call a boomerang that won’t come back?
A stick.`,
`What does a cloud wear under his raincoat?
Thunderwear.`, 
`Two pickles fell out of a jar onto the floor. 
What did one say to the other?
Dill with it.` ,
`What time is it when the clock strikes 13?
Time to get a new clock.`, 
`How does a cucumber become a pickle?
It goes through a jarring experience.`, 
`What did one toilet say to the other?
You look a bit flushed. `,
`What do you think of that new diner on the moon?
Food was good, but there really wasn’t much atmosphere.`, 
`Why did the dinosaur cross the road?
Because the chicken wasn’t born yet.`,
`Why can’t Elsa from Frozen have a balloon?
Because she will "let it go, let it go."`,
`Why did the kid bring a ladder to school?
Because she wanted to go to high school.`,
`What do you call a dog magician?
A labracadabrador.'`,
`Where would you find an elephant?
The same place you lost her.` ]

let randomNo = Math.floor(Math.random()*(jokes.length-1))
// console.log(jokes[randomNo])
ihtml = ""
ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                <img src="kids.jpg" class="card-img-top" alt="" width=300px height=300px>
                                <div class="card-body">
                                        <h5 class="card-title">Funny jokes</h5>
                                        
                                        <p> ${jokes[randomNo]} </p>
                                        
                                </div>
                        </div>
                `
cardContainer.innerHTML = ihtml
