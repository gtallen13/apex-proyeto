let news_options = document.getElementsByClassName('news_options');
for (let i = 0; i <news_options.length; i++)
{
    news_options[i].addEventListener('click', function(e)
    {
        let idNewsOptions = e.currentTarget.getAttribute('data-news');

        const news_info_containers = document.getElementsByClassName('news_info_containers');
        for (let j = 0; j < news_info_containers.length; j++)
        {
            news_info_containers[j].classList.add('esconder');
        }
        document.getElementById(idNewsOptions).classList.remove('esconder');
        for (let k = 0; k < news_options.length; k++)
        {
            news_options[k].classList.remove('selected');
        }
        e.currentTarget.classList.add('selected'); 

    })
}


//Tooltips
tippy('#velvet_oasis', 
{
    content: `<p>Twin luxurious apartments that offer mid to long range engagements across its sleek landscape.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});
tippy('#arcadia_supercarrier', 
{
    content: `<p>A massive vessel last seen leaving the planet Talos. It assisted Olympus with
    transportation of arms, vehicles, scientific equipment and personnel</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});
tippy('#docks', 
{
    content: `<p>An open, industrial pier where ships can refuel and cargo is transferred 
    to and from Olympus. The mountain facade helps hide the dirty work that goes on here 
    from those who wish to not see it.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#pp_grid', 
{
    content: `<p>To power such a large attraction takes a big effort. Power Grid 
    is split into two halves: Primary and Secondary.</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#rift_aftermath', 
{
    content: `<p>A massive explosion took place where the phase runner entrance used 
    to be, splitting the zone apart. The resulting unstable rift floats within the zone’s center.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#central_turbine', 
{
    content: `<p>Within the mountain facade lies this imposing circular location 
    that houses spinning fans above and below.</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#autumn_estates', 
{
    content: `<p>Far from the greasy, industrial clutter lies this idyllic 
    property where those needing rest and relaxation can escape to. Residential 
    housing for the wealthy are evenly distributed on golden brown plots of land.</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#hammond_labs', 
{
    content: `<p>A stylistic, pristine building that sits in the center of a 
    large open landscape. Waterfalls crest the peak of the overwatch where the
     Research Basin resides. Enter cautiously to find out what Hammond was researching within.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#energy_depot', 
{
    content: `<p>Slick, clean, with function over form. This industrial housing 
    stores and charges hundreds of batteries that are then used to power many of
    the assets seen throughout Olympus.</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#golden_gardens', 
{
    content: `<p>Retreat and experience privacy amongst multiple living spaces
     within this rich, luxurious environment.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#grow_towers', 
{
    content: `<p>Slowly rotating sniper perches of doom. Times three. These ornate 
    structures overlook a large agricultural landscape below.</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#oct_sites', 
{
    content: `<p>Tucked far away from most of Olympus, surrounded by large, 
    unbreachable walls lies this slick, military testing site. A large orbital
     cannon serves as the focal point for this zone; surrounded by an open air facility.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});


tippy('#solar_array', 
{
    content: `<p>Olympus requires a lot of power, and this sector serves as one many 
    to keep this gravity defying city afloat. This dense, solar-powered sector acts 
    as both a chokepoint and POI.</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#bonsai_plaza', 
{
    content: `<p>The crown jewel of Olympus. This spacious downtown is home to restaurants, 
    cherry blossom gardens and the well known Reverie Lounge.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#hydroponics', 
{
    content: `<p>Within these sprawling agricultural grounds, rounded top buildings 
    and iconic silos are arranged throughout. The curved farmlands and algae green pools 
    add to its uniqueness.</p>`,
    placement: 'left',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});

tippy('#elysium', 
{
    content: `<p>Small, intimate and very close quarters; Elysium is 
    a small POI focused on skirmishes.</p>`,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
});