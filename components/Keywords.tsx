import Heading from "./Heading"

export default function Keywords() {
    return (
        <form>
            <div className="space-y-12">
                
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <div className="mt-10 ">
                            <label htmlFor="keyword_1" className="block text-sm font-medium leading-6 text-gray-900">
                                Keyword 1
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md">
                                    
                                    <input
                                        type="text"
                                        name="keyword_1"
                                        id="keyword_1"
                                        autoComplete="keyword_1"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 ">
                        <label htmlFor="keyword_2" className="block text-sm font-medium leading-6 text-gray-900">
                            Keyword 1
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="keyword_2"
                                    id="keyword_2"
                                    autoComplete="keyword_2"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder=""
                                />
                                </div>
                            </div>
                    </div>
                    
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}