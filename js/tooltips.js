//Getting DOM IDs to place tooltips
const tTip_Bangalore = document.getElementById('bangalore_tooltip');
const tTip_Bloodhound = document.getElementById('bloodhound_tooltip');
const tTip_Caustic = document.getElementById('caustic_tooltip');
const tTip_Crypto = document.getElementById('crypto_tooltip');
const tTip_Gibraltar = document.getElementById('gibraltar_tooltip');
const tTip_Horizon = document.getElementById('horizon_tooltip');
const tTip_Lifeline = document.getElementById('lifeline_tooltip');
const tTip_Loba = document.getElementById('loba_tooltip');
const tTip_Mirage = document.getElementById('mirage_tooltip');
const tTip_Octane = document.getElementById('octane_tooltip');
const tTip_Pathfinder = document.getElementById('pathfinder_tooltip');
const tTip_Rampart = document.getElementById('rampart_tooltip');
const tTip_Revenant = document.getElementById('revenant_tooltip');
const tTip_Wattson = document.getElementById('wattson_tooltip');
const tTip_Wraith = document.getElementById('wraith_tooltip');


//Populating info for tooltips
const bangaloreInfo = 
`<div class="tooltips_info" id="bangalore_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="bangalore_ability1" class="legends_abilities ability_images"></div>
        <h4>Double Time <br>(Passive)</h4>
        <p>
            Taking fire while sprinting makes you move faster for a brief time.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="bangalore_ability2" class="legends_abilities ability_images"></div>
            <h4>Smoke Launcher <br>(Tactical)</h4>
            <p>
                Fire a high-velocity smoke canister that explodes into a 
                smoke wall on impact.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="bangalore_ability3" class="legends_abilities ability_images"></div>
            <h4>Rolling Thunder <br>(Ultimate)</h4>
            <p>
                Call in an artillery strike that slowly creeps across the landscape.
            </p>
    </div>
</div>`
const bloodhoundInfo = 
`<div class="tooltips_info" id="bloodhound_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="bloodhound_ability1" class="legends_abilities ability_images"></div>
        <h4>Tracker <br>(Passive)</h4>
        <p>
            See tracks left behind by your foes.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="bloodhound_ability2" class="legends_abilities ability_images"></div>
            <h4>Eye of the Allfather <br>(Tactical)</h4>
            <p>
                Briefly reveal hidden enemies, traps, and clues throughout structures in front of you.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="bloodhound_ability3" class="legends_abilities ability_images"></div>
            <h4>Beast of the hunt <br>(Ultimate)</h4>
            <p>
                Enhances your senses, allowing you to move faster and highlighting your prey.
            </p>
    </div>
</div>`
const causticInfo = 
`<div class="tooltips_info" id="caustic_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="caustic_ability1" class="legends_abilities ability_images"></div>
        <h4>Nox Vision <br>(Passive)</h4>
        <p>
            Allows you to see your enemies through your gas.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="caustic_ability2" class="legends_abilities ability_images"></div>
            <h4>Nox Gas Trap <br>(Tactical)</h4>
            <p>
                Drop canisters that release deadly Nox gas when shot or triggered by enemies.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="caustic_ability3" class="legends_abilities ability_images"></div>
            <h4>Nox Gas Grenade <br>(Ultimate)</h4>
            <p>
                Blankets a large area in Nox gas.
            </p>
    </div>
</div>`
const cryptoInfo = 
`<div class="tooltips_info" id="crypto_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="crypto_ability1" class="legends_abilities ability_images"></div>
        <h4>Neurolink <br>(Passive)</h4>
        <p>
            Enemies detected by Survelleince Drone within 30 meters of your position are marked for you
            and your teammates to see.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="crypto_ability2" class="legends_abilities ability_images"></div>
            <h4>Surveillance Drone <br>(Tactical)</h4>
            <p>
                Deploy an aerial drone that allows you to view the surrounding area from above.
                If destroyed, there is a forty-second cooldown.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="crypto_ability3" class="legends_abilities ability_images"></div>
            <h4>Drone EMP <br>(Ultimate)</h4>
            <p>
                Your Survelleince Drone sets off an EMP blast that deals shield damage, slows enemies,
                and disables traps.
            </p>
    </div>
</div>`

const gibraltarInfo = 
`<div class="tooltips_info" id="gibraltar_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="gibraltar_ability1" class="legends_abilities ability_images"></div>
        <h4>Gun Shield <br>(Passive)</h4>
        <p>
          Aiming down sights deploys a gun shield that blocks incoming fire.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="gibraltar_ability2" class="legends_abilities ability_images"></div>
            <h4>Dome of Protection <br>(Tactical)</h4>
            <p>
              Throw down a dome shield that blocks attacks.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="gibraltar_ability3" class="legends_abilities ability_images"></div>
            <h4>Defensive Bombardment <br>(Ultimate)</h4>
            <p>
              Call in a concentrated mortar strike on a marked position.
            </p>
    </div>
</div>`

const horizonInfo = 
`<div class="tooltips_info" id="gibraltar_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="horizon_ability1" class="legends_abilities ability_images"></div>
        <h4>Spacewalk <br>(Passive)</h4>
        <p>
          Increase air control and reduce fall impacts with Horizon's custom spacesuit.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="horizon_ability2" class="legends_abilities ability_images"></div>
            <h4>Gravity Lift <br>(Tactical)</h4>
            <p>
              Reverse the flow of gravity, lifting upwards and boosting them outwards when they exit.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="horizon_ability3" class="legends_abilities ability_images"></div>
            <h4>Black Hole <br>(Ultimate)</h4>
            <p>
              Deploy N.E.W.T to create a micro black hole that pulss players towards it, and hits
              them with graviton blast at the end.
            </p>
    </div>
</div>`

const lifelineInfo = 
`<div class="tooltips_info" id="lifeline_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="lifeline_ability1" class="legends_abilities ability_images"></div>
        <h4>Combat Medic <br>(Passive)</h4>
        <p>
          Deploy D.O.C. to revive teammates, leaving you free to move and defend.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="lifeline_ability2" class="legends_abilities ability_images"></div>
            <h4>D.O.C. Heal Drone <br>(Tactical)</h4>
            <p>
              Call your Drone of Compassion to automatically heal nearby teammates over time.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="lifeline_ability3" class="legends_abilities ability_images"></div>
            <h4>Care Package <br>(Ultimate)</h4>
            <p>
              Call in a drop pod full of high-quality defensive gear.
            </p>
    </div>
</div>`

const lobaInfo = 
`<div class="tooltips_info" id="loba_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="loba_ability1" class="legends_abilities ability_images"></div>
        <h4>Eye for Quality <br>(Passive)</h4>
        <p>
          Nearby epic and legendary loot can be seen through walls. 
          The range is the same as Black Market Boutique.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="loba_ability2" class="legends_abilities ability_images"></div>
            <h4>Burglar's Best Friend <br>(Tactical)</h4>
            <p>
              Teleport to hard-to-reach places or escape trouble quickly by throwing your Jump Drive bracelet.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="loba_ability3" class="legends_abilities ability_images"></div>
            <h4>Black Market Boutique <br>(Ultimate)</h4>
            <p>
              Place a portable device that allows you to teleport nearby loot to your inventory. 
              Can take up to two items.
            </p>
    </div>
</div>`

const mirageInfo = 
`<div class="tooltips_info" id="mirage_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="mirage_ability1" class="legends_abilities ability_images"></div>
        <h4>Now You See Me... <br>(Passive)</h4>
        <p>
          Automatically cloak when using Respawn Beacons and reviving teammates.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="mirage_ability2" class="legends_abilities ability_images"></div>
            <h4>Psyche Out <br>(Tactical)</h4>
            <p>
              Send out a holographic decoy to confuse the enemy.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="mirage_ability3" class="legends_abilities ability_images"></div>
            <h4>Life of the Party <br>(Ultimate)</h4>
            <p>
              Deploy a team of Decoys to distract enemies.
            </p>
    </div>
</div>`

const octaneInfo = 
`<div class="tooltips_info" id="octane_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="octane_ability1" class="legends_abilities ability_images"></div>
        <h4>Swift Mend <br>(Passive)</h4>
        <p>
          Automatically restores health over time.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="octane_ability2" class="legends_abilities ability_images"></div>
            <h4>Stim <br>(Tactical)</h4>
            <p>
              Move 30% faster for six seconds. Costs health to use.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="octane_ability3" class="legends_abilities ability_images"></div>
            <h4>Launch Pad <br>(Ultimate)</h4>
            <p>
              Deploy a jump pad that catapuhlts teammates through the air.
            </p>
    </div>
</div>`

const pathfinderInfo = 
`<div class="tooltips_info" id="pathfinder_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="pathfinder_ability1" class="legends_abilities ability_images"></div>
        <h4>Insider Knowledge <br>(Passive)</h4>
        <p>
          Scan a survey beacon to reveal the ring's next location.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="pathfinder_ability2" class="legends_abilities ability_images"></div>
            <h4>Grappling Hook <br>(Tactical)</h4>
            <p>
              Grapple to get out-of-reach places quickly.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="pathfinder_ability3" class="legends_abilities ability_images"></div>
            <h4>Zipline Gun <br>(Ultimate)</h4>
            <p>
              Create a zipline for everyone to use.
            </p>
    </div>
</div>`

const rampartInfo = 
`<div class="tooltips_info" id="rampart_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="rampart_ability1" class="legends_abilities ability_images"></div>
        <h4>Modded Loader <br>(Passive)</h4>
        <p>
          Increased magazine capacity and faster reloads when using LMGs and the Minigun.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="rampart_ability2" class="legends_abilities ability_images"></div>
            <h4>Amped Cover <br>(Tactical)</h4>
            <p>
              Build a crouch-cover wall, which deploy a full-cover amped wall that blocks incoming shots and amps
              outgoing shots.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="rampart_ability3" class="legends_abilities ability_images"></div>
            <h4>Emplaced Minigun "Sheila" <br>(Ultimate)</h4>
            <p>
              Place a mounted machine gun that anyone can use. 
            </p>
    </div>
</div>`

const revenantInfo = 
`<div class="tooltips_info" id="revenant_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="revenant_ability1" class="legends_abilities ability_images"></div>
        <h4>Stalker <br>(Passive)</h4>
        <p>
          You crouch-walk faster and can climb higher than other legends.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="revenant_ability2" class="legends_abilities ability_images"></div>
            <h4>Silence <br>(Tactical)</h4>
            <p>
              Throw a device that deals damage and disables enemy abilities.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="revenant_ability3" class="legends_abilities ability_images"></div>
            <h4>Death Totem <br>(Ultimate)</h4>
            <p>
              Drop a totem that protects those who use it from death for a set amount of time. 
              Instead of being killed or downed, users will return to the totem.
            </p>
    </div>
</div>`

const wattsonInfo = 
`<div class="tooltips_info" id="wattson_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="wattson_ability1" class="legends_abilities ability_images"></div>
        <h4>Spark of Genius <br>(Passive)</h4>
        <p>
          Ultimate Accelerants fully charge your ultimate ability.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="wattson_ability2" class="legends_abilities ability_images"></div>
            <h4>Perimeter Security <br>(Tactical)</h4>
            <p>
              Connect nodes to create electrified fences that damage and slow enemies.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="wattson_ability3" class="legends_abilities ability_images"></div>
            <h4>Interception Pylon <br>(Ultimate)</h4>
            <p>
              Place an electrified pylon that destroyes incoming ordnance and repars damages shields.
            </p>
    </div>
</div>`

const wraithInfo = 
`<div class="tooltips_info" id="wraith_tooltip_info">
    <!--Column 1-->
    <div class="tooltips_columns">
        <div id="wraith_ability1" class="legends_abilities ability_images"></div>
        <h4>Voices from the Void <br>(Passive)</h4>
        <p>
          A voice warns you when danger approaches. As far as you can tell, it's on your side.
        </p>
    </div>
    <!--Column 2-->
    <div class="tooltips_columns">
        <div id="wraith_ability2" class="legends_abilities ability_images"></div>
            <h4>Into the Void <br>(Tactical)</h4>
            <p>
              Reposition quickly through the safety of void space, avoiding all damage.
            </p>
    </div>
    <!--Column 3-->
    <div class="tooltips_columns" >
        <div id="wraith_ability3" class="legends_abilities ability_images"></div>
            <h4>Dimensional Rift <br>(Ultimate)</h4>
            <p>
              Link two locations with portals for 60 seconds, allowing your entire team to use them.
            </p>
    </div>
</div>`

//Tooltip Declaration
tippy(tTip_Bangalore  , 
{
  content: bangaloreInfo, 
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Bloodhound, 
{
  content: bloodhoundInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});
tippy(tTip_Caustic, 
{
  content: causticInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});
tippy(tTip_Crypto, 
  {
    content: cryptoInfo,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
  });
tippy(tTip_Gibraltar, 
{
  content: gibraltarInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Horizon, 
  {
    content: horizonInfo,
    placement: 'right',
    allowHTML:true,
    animation:'scale',
    theme:'apex_legends',
    interactive: true,
    interactiveBorder: 30,
  });

tippy(tTip_Lifeline, 
{
  content: lifelineInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Loba, 
{
  content: lobaInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Mirage, 
{
  content: mirageInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Octane, 
{
  content: octaneInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Pathfinder, 
{
  content: pathfinderInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Rampart, 
{
  content: rampartInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Revenant, 
{
  content: revenantInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Wattson, 
{
  content: wattsonInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});

tippy(tTip_Wraith, 
{
  content: wraithInfo,
  placement: 'right',
  allowHTML:true,
  animation:'scale',
  theme:'apex_legends',
  interactive: true,
  interactiveBorder: 30,
});
