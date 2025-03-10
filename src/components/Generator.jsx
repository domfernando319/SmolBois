import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/smoldier'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  return (
      <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2'>
              <p className='text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800'>{index}</p>
              <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>

          </div>
          <p className='text-sm sm:text-base mx-auto'>{description}</p>

      </div>
  )
}

export default function Generator(props) {
  const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props
  const [showModal, setShowModal] = useState(false)
  

  function toggleModal() {
    setShowModal(!showModal)
  }
   
  function updateMuscles(muscleGroup) {

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 3) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    

    setMuscles([...muscles, muscleGroup])

    if (muscles.length === 2) {
      setShowModal(false)
    }
  }


  return (
    <div className='min-h-screen ' id={'generate'}>
      <SectionWrapper header={"GET YOUR WORKOUT PLAN"} title={['It\'s', 'SMOL', 'o\'clock 💪', ]}>
        <Header index={'01'} title={'PICK YOUR POISON'} description={'Select the workout you wish to endure.'}></Header>
        {/* map out workout */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-5'>
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
              return (
                  <button onClick={() => {
                      setMuscles([])
                      setPoison(type)
                  }} className={'bg-teal-950 border-2  duration-200 px-4 hover:border-teal-400 py-3 rounded-lg ' + (type === poison ? ' border-teal-200' : ' border-teal-800')} key={typeIndex}>
                      <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                  </button>
              )
          })}
        </div>

        <Header index={'02'} title={'LOCK IN'} description={"Select target muscle groups."} />
        <div className='bg-teal-950  border-2 border-solid border-teal-600 rounded-lg flex flex-col m-6 p-3'>
            <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
            </button>
            {showModal && (
                <div className='flex flex-col px-3 pb-3'>
                    {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                        return (
                            <button onClick={() => {
                                updateMuscles(muscleGroup)
                            }} key={muscleGroupIndex} className={'hover:text-teal-600 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-teal-700 font-bold' : ' ')}>
                                <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>



        <Header index={'03'} title={'DEFY EXPECTATIONS'} description={'Select your ultimate objective.'}></Header>
        {/* map out schemes */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-5'>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button onClick={() => {
                setGoal(scheme)
            }} className={'bg-teal-950 border-2  duration-200 px-4 py-4 hover:border-teal-400 py-3 rounded-lg ' + (scheme === goal ? ' border-teal-200' : ' border-teal-800')} key={schemeIndex}>
                <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
            )
          })}
        </div>
        
        <Button func = {updateWorkout} text={'Generate'}></Button>
      </SectionWrapper>
      <div className='m-[8rem]'></div>
      
    </div>
  )
}
