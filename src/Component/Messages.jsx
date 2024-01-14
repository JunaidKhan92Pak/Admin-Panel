import React from "react";


const messages = () => {


    return (
        <div>
            <section className="flex justify-center items-center" >



                <div class=" py-32">
                    <table class="  border-gray-800 dark:border-gray-700 md:rounded-lg text-sm overflow-hidden border-5 text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead class="dark:divide-gray-700 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-32 py-6">
                                    Name
                                </th>
                                <th scope="col" class="px-32 py-6">
                                    email
                                </th>
                                <th scope="col" class="px-32 py-6">
                                    status
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-32 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 hamdan
                                </th>
                                <td class="px-32 py-4">
                                    hamdan@gmail.com
                                </td>
                                <td class="px-32 py-4">
                                    active
                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-32 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Mike
                                </th>
                                <td class="px-32 py-4">
                                    Mike@gmail.com
                                </td>
                                <td class="px-32 py-4">
                                    inActive
                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-32 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Zohaib
                                </th>
                                <td class="px-32 py-4">
                                    Zohaib@gmail.com
                                </td>
                                <td class="px-32 py-4">
                                    active
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>


            </section>
        </div>

    )
}

export default messages;