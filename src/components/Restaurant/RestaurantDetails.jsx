import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories=["pizza", "pasta", "burger", "chicken", "dessert"];
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian",value:"vegetarian"},
    {label:"Non-Vegetarian",value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"}
];

const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
    const[foodType,setFoodType]=useState("all")
    const handleFilter=(e)=>{
        console.log(e.target.value,e.taget.name)
    }
  return (
    <div className='px-5 lg:px-20 text-left'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/Italy/Mamas/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        
                        <img className='w-full h-[40vh] object-cover' src="https://i.postimg.cc/Vk2WJ6jp/restaurant-5521372.jpg" alt="" />

                    </Grid>
                    <Grid item xs={12} lg={6}>
                        
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_960_720.jpg" alt="" />

                    </Grid>
                    <Grid item xs={12} lg={6}>
                        
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_640.jpg" alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Mamas</h1>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit. Aenean commodo lorem tellus, ut interdum diam hendrerit eu. 
                     Quisque viverra libero vitae nunc mollis ornare. Aenean vehicula 
                     euismod mauris nec volutpat. Interdum et malesuada fames ac ante 
                     ipsum primis in faucibus.
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span>
                            Skopje, Karposh 
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>
                            Mon-Sun: 09:00 - 21:00 (Today)
                        </span>
                    </p>
                </div>
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                               {foodTypes.map((item)=> (
                                <FormControlLabel 
                                key={item.value}
                                value={item.value} 
                                control={<Radio/>} 
                                label={item.label} />
                               ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                               {categories.map((item)=> (
                                <FormControlLabel 
                                key={item}
                                value={item} 
                                control={<Radio/>} 
                                label={item} />
                               ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item)=><MenuCard/>)}
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails