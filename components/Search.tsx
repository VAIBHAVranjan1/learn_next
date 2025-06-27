"use client"
import React from 'react'
import Form from 'next/form'
import Link from 'next/link'
import { Search as Searching} from 'lucide-react'
import { X } from 'lucide-react'

const Search = ({query}: {query?: string}) => {
    
    function reset(){
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if(form){
            form.reset();
        }

    }
  return (
    <Form action="/" scroll={false} className='search-form'>

        <input name='query' defaultValue={query} className='search-input' placeholder='Search Startups'/>

        <div className='flex gap-2'>
            {query && (
                <button type="reset" onClick={reset} className=''>
                    <Link href='/' className='search-btn text-white'>
                        <X />
                    </Link>
                </button>
            )}

            <button type='submit' className='search-btn text-white'>
                <Searching />
            </button>
        </div>

    </Form>
  )
}

export default Search