import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const OnBoardingRoute = () => {
    return (
        <>
            <div className="min-h-screen w-screen flex items-center justify-center">
                <Card>

                    {/* CARD HEADER */}
                    <CardHeader>
                        <CardTitle>Welcome to Cal<span className='text-primary'>Lodhi</span></CardTitle>
                        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex dolorum nobis temporibus iusto impedit.</CardDescription>
                        {/* <CardDescription>We need the follwing information to setup your profile</CardDescription> */}
                    </CardHeader>

                    {/* FORM CREATED FOR SUBMISSION OF DETAILS */}
                    <form>

                        {/* CARD BODY */}
                        <CardContent className='flex flex-col gap-y-5'>

                            <div className="grid grid-y-2">
                                <Label>Full Name</Label>
                                <Input placeholder='Praveen Lodhi' className='' />
                            </div>

                            <div className="flex rounded-md">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">
                                    CalLodhi.com/
                                </span>
                                <Input placeholder='example-user-1' className='rounded-l-none' />
                            </div>

                        </CardContent>

                        {/* CARD FOOTER */}
                        <CardFooter>
                            <Button className='w-full'>Submit</Button>
                        </CardFooter>

                    </form>

                </Card>
            </div>
        </>
    )
}

export default OnBoardingRoute