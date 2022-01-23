import Image from "@material-tailwind/react/Image";
import Button from "@material-tailwind/react/Button";
import H3 from "@material-tailwind/react/Heading2";
import {FaRegAddressCard} from "react-icons/fa";

export default function MainSection () {

    const ProfilePicture = 'https://s3-alpha-sig.figma.com/img/26dc/f97a/323f0974666539a8ad5cc68f377c2a92?Expires=1643587200&Signature=ATG9~PlpGSnPpSyi44I26GvhYMb2fAzfrvpmkp9AJMb2r3GkqF3XxmESdhVdZU00aodgp39GSeSn72UshVv225WcBsxw2mXyEZWer788B3t~sLLTZmbsOF~hMq6xTfGUY0BjpxjA4ejqFpXRpNzzNKA4aTan4~w3-7Sa4cMyefg35vewVq1LJPpze8eDjXzOhp~Ar18sWGoSjomjT--t6v6lCJKTulXwQku24ZYjSanDT9OGZxTx2q5QtBHUWVjp8en2jwJIHC4cESH7wD-x7tp76uBpKXJ4TjyrIe7Gd5driYwSD~MQ3sb3RISoQm9r2~YFH9g94f099qyqHr48iQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

    return (
                <>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <div className="w-40 -mt-20 bg-white border rounded-full ">
                                            <Image src={ProfilePicture} alt="Profile picture" raised rounded/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                    <Button color="lightBlue" ripple="light">
                                        Settings
                                    </Button>
                                </div>


                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className=" flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center border">
                                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                            22
                                                        </span>
                                            <span className="text-sm text-gray-700">
                                                            Items created
                                                        </span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center border">
                                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                            89
                                                        </span>
                                            <span className="text-sm text-gray-700">
                                                            Collections
                                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-8">
                                <H3 color="gray">Jenna Stones</H3>
                                <div className="mt-0 mb-2 text-gray-700  flex items-center justify-center gap-2">
                                    <FaRegAddressCard  name="place" size="" />
                                    <span className='text-tahiti text-cyan-400 '>0xd12Cd8A37F074e7eAFae618C986Ff825666198bd </span>
                                </div>
                            </div>
                            <div className="flex justify-center gap-x-40 ">
                                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                    <button className="font-medium text-center text-gray-500 rounded-t-lg border-b-2
                                                border-transparent hover:text-blue-700 hover:border-blue-700 " aria-current="page"><a href="./ItemsCreated"> Create</a></button>
                                </div>
                                <div className="mb-3 text-gray-700 text-center  gap-6">
                                                <span>
                                                    <button className="font-medium text-center text-gray-500 rounded-t-lg border-b-2
                                                border-transparent hover:text-blue-700 hover:border-blue-700 "><a href="./WalletInfo"> Wallet</a></button>
                                                </span>
                                </div>
                            </div>
                     </>

);
}