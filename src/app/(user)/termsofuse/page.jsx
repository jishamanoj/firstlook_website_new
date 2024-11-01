'use client'
import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const TermsOfUse = () => {
    const [list, setList] = useState(false)
    return (
        <>
            <Navbar fontcolor='black' />
            <div className='font-sans mt-20 md:mt-24 mb-10'>
                <div className="flex justify-center items-center">
                    <section className="bg-white px-7 py-12 sm:px-16 sm:py-16 md:px-20 md:py-16 xl:px-28 xl:py-16 h-fit rounded-3xl w-[95%] xl:w-[1150px]">
                        <div className='lg:block hidden'>
                            <div className='flex md:space-x-6 lg:space-x-12 xl:space-x-16 text-[21px] font-light'>
                                <Link href='/membershippolicy' className='cursor-pointer'>
                                    Membership Policy
                                </Link>
                                <Link href='/termsofuse' className='font-semibold border-b-2 border-[#FC3657] cursor-pointer'>
                                    Terms of use
                                </Link>
                                <Link href='/privacypolicy' className='cursor-pointer'>
                                    Privacy Policy
                                </Link>
                                <Link href='/refundpolicy' className='cursor-pointer'>
                                    Refund & Cancellation Policy
                                </Link>
                            </div>
                        </div>

                        <div className='lg:hidden block'>
                            <div onClick={() => list ? setList(false) : setList(true)} className='flex space-x-2 text-[#444444]'>
                                <p className='font-semibold border-b sm:text-[21px] border-black'>
                                    Terms of use
                                </p>
                                <div className='flex items-center'>
                                    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.474469 0H6.57705C6.99922 0 7.21031 0.509932 6.91147 0.808776L3.86137 3.86125C3.67637 4.04625 3.37515 4.04625 3.19015 3.86125L0.140049 0.808776C-0.158795 0.509932 0.052293 0 0.474469 0Z" fill="black" />
                                    </svg>
                                </div>
                            </div>

                            {
                                list ?
                                    <div className='bg-white border border-[#444444] rounded-xl mt-4 p-4'>
                                        <div className='flex flex-col text-[16px] font-light'>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='mt-2'>
                                                <Link href='/membershippolicy'>
                                                    Membership Policy
                                                </Link>
                                            </h1>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='font-semibold mt-2'>
                                                <Link href='/termsofuse'>
                                                    Terms of use
                                                </Link>
                                            </h1>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='mt-2'>
                                                <Link href='/privacypolicy'>
                                                    Privacy Policy
                                                </Link>
                                            </h1>
                                            <h1 onClick={() => {
                                                setList(false)
                                            }
                                            } className='mt-2'>
                                                <Link href='/refundpolicy'>
                                                    Refund & Cancellation Policy
                                                </Link>
                                            </h1>
                                        </div>
                                    </div> : ''
                            }

                        </div>

                        <div className='text-[#444444]'>
                            <p className={list ? 'mt-8 sm:text-[21px] font-light' : 'mt-10 sm:mt-10 lg:mt-16 sm:text-[21px] font-light'}>
                                Effective from: 2024 April 1
                            </p>
                            <p className="font-semibold text-[24px] sm:text-[54px] mt-3">
                                TERMS OF USE
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-4">
                                Introduction
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                You must read and understand these terms and conditions before using our website
                                (www.firstlook.pro) / mobile app named ‘Firstlook’. You may only use this web &amp; app, in
                                terms with our policies. We will let you know about the changes, as soon as they occur
                                in future. We hereby humbly request you to start using our service after reading and
                                understanding each term of use.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                About the company
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                ‘Firstlook’is under the complete ownership and control of an Internet Company
                                ‘Sebastian and Sons Digital Pvt Ltd’., which is registered at Chennai, India. The
                                company also have a trade name &#39;MCABEE&#39;. Which is completely owned by people with
                                Indian citizenship. Company doesn&#39;t have any foreign investment, alliance or
                                partnerships till the date.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                About the services
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Firstlook is a complete social application that exclusively for single&#39;s who are searching
                                for a life partner. We are providing a digital platform to the people who want to find a
                                suitable person to marry. We will be keen to omit fake profiles and inactive accounts
                                time to time, thus providing you with a better chance of finding an active profile.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                We are giving you some directions here regarding the use of this application. We cannot
                                assure you complete success in finding a partner by using our application. But we
                                assure that we can provide maximum number of profiles based on your preferences and
                                taste&#39;s. You can choose from that wide range of profiles as per your taste. You will be
                                sharing some details regarding your choices while signing in to our application. We are
                                providing suitable profiles as per your preferences and also the recommendation by our
                                algorithm. We can only select profiles which are listed in our database. We use a
                                special algorithm to filter your preferred choices from our database. We cannot
                                guarantee that these profiles will be completely satisfactory to you. However, we can
                                assure that these profiles will be of maximum compatibility to your choices.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                You can propose them via mobile application or chat with them directly. Accepting or
                                rejecting your proposal is entirely based on their personal freedom. We are not a part of
                                it.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Before you marry a person through our platform, you should contact them directly and
                                verify the details provided by them. We hold no responsibility over the details provided
                                by our user profile regarding education, occupation, financial status and family
                                backgrounds. That completely provided by the profile owner.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding Registration
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Anyone can enlist in our app if they are over 18 years old Indian citizen, currently
                                residing in India or abroad, either single, widowed, or divorcee.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                You must have a valid mobile number. You should register in our app using this
                                number. We will be verifying your number and accuracy of data provided by you using
                                this contact number. We will be using OTP system and will contact you directly (if
                                required) for this process of verification. You should provide an alternative number. We
                                will only use this secondary number to contact you in case the primary contact number
                                is unavailable.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Kindly provide only correct and accurate details about yourself. Use latest pictures and
                                at-least one selfie image. Sole responsibility of the data that you provide will be upon
                                you. Kindly understand that that the data you provide will be the parameter on which
                                people will be impressed and propose you. If you use someone else’s photos, you will
                                be responsible for the legal and other issues that may occur later.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                The entire data that you provide on the app can be viewed by other members, except
                                your residential address and contact number. Kindly know that anyone can access your
                                data as long as they are a valid member of this application. We will provide you the
                                visitor&#39;s details of your profile in a timely manner.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                We will verify the mobile number via OTP method and direct call to them to confirm the
                                authenticity of the contact number. Also, we verify the govt (India) authorized id proof, to
                                verify the identity and residential address. This will help to avoid fake profiles and
                                duplicate profiles. The authenticity of the data will be the sole responsibility of the owner
                                of the profile. Or website / mobile app, our parent company, owners, directors,
                                investor’s, management and staff members hold no responsibility over the authenticity
                                of the data provided by a user.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                You can delete the profile and exit from the application whenever you like. You can also
                                hide your profile for a short period of time and make it inactive without deleting the
                                profile. By doing this, you will be able to reactivate the same account later. You may
                                have to verify your mobile number once again to confirm the re-entry. The profile details
                                will be verified again if necessary.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding verification
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We will verify the mobile number via OTP method and direct call to them (if required) to
                                confirm the authenticity of the contact number. Also, we verify the govt (India)
                                authorized id proof, to verify the identity and residential address. This will help to avoid
                                fake profiles and duplicate profiles. Before verify your id proof, you can’t do any major
                                activities in our website / app, includes chat, proposal. if you are not adding your id
                                while registration, you should add this after launch your profile, within a period of 14
                                days. Otherwise, we will move your profile to waiting list and in future it will going to a
                                permanent removal of your account.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding the Content
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                All the common contents used in this application such as names, taglines, references,
                                announcements, etc. come under complete responsibility and knowledge of our
                                application. These are specially designed for our website / mobile app.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                The images (Advertisement posters, images of models etc) used in our application,
                                social media pages, and other advertisement campaigns etc are used with the consent
                                of the concerned content creator. Copying of these properties without our consent is
                                strictly prohibited.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                User details, their conversations and contacts (Personal details, Interests, Occupation,
                                Education, Family, Photos, Videos, Comments, Messages etc) are the sole
                                responsibility of the profile owner. This application, our parent company, owners,
                                directors, investor’s, management and staff members will have no responsibility over
                                the user generated contents. If you have any grievances, you can directly contact us [write us to <span className='text-[#FC3657] font-medium'> support@firstlook.pro</span> ] and we will analyze the situation and act accordingly.
                                It may vary from strict warning to total ban of the profile. If you want to proceed with
                                your grievances further, you can act accordingly as per the legal norms available in the
                                jurisdiction of the union of India. We will provide available data regarding the culprit or
                                victim.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Data Collection and Usage
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                At &#39;Firstlook&#39;, we prioritize your privacy while striving to enhance your matchmaking
                                experience. Here&#39;s how we handle the information you provide and share with others:
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Sign-up Information: During sign-up, we collect your mobile number for verification via
                                OTP (One-Time Password). This ensures the authenticity of your account.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Personal Information: We gather additional personal details such as education, job,
                                current location, and native place to facilitate better match filtering, ensuring you
                                connect with individuals who align with your preferences and interests.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Data Sharing: We only share your collected data with registered users within the app
                                interface. We strictly prohibit sharing this data on any third-party app or website.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Sensitive Information Protection: Your address, family details, and contact information
                                (such as email and mobile number) are never shared with other users under any
                                circumstances.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Photos and Video Reels: You have the freedom to upload photos and video reels
                                without limitations. This feature is designed to allow you to make a compelling first
                                impression on your profile.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Sharing Information with Others: To enhance matchmaking, we share certain personal
                                details like gender, age, education, job, location, and native place with other users.
                                Additionally, we share photos and videos to help foster connections. However, we never
                                disclose sensitive information such as your address or contact details like email or
                                phone number to any other users.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                User Control: You have full control over the information you share. Whether it&#39;s via your
                                profile or through chat, the decision to share additional details with others is entirely
                                yours. We entrust you with the responsibility of managing the dissemination of your
                                personal data.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                At &#39;Firstlook&#39;, we&#39;re committed to maintaining the highest standards of privacy and
                                security. If you have any concerns or questions about our privacy practices, please don&#39;t
                                hesitate to reach out to us.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding photos and videos
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                You can add photos and videos without limits in your profile. This is intended to create a
                                better first impression. So, it would be better if you can add latest and high-quality
                                images with proper screen resolution.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Try to add full size photos and close-ups. Far and faded images, group photos (except
                                family), unclear profile photos, low quality photos, photos with water marks and writings,
                                face covered by mask, helmet etc are not allowed. You must add at-least three photos.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                You don’t have any limits to add photos. We will not approve profiles without photos and
                                such profiles will not be listed in search results.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                You can add photos without limits to your profile, intended to create a better first
                                impression. However, these photos cannot be copied, downloaded, or even captured
                                via screenshots.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                At &#39;Firstlook&#39;, we value your privacy and are committed to providing a safe and
                                enjoyable experience for all users. Here&#39;s how we handle video reels and protect your
                                privacy:
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Video profiles are a new and innovative idea to captivate and find a possible life partner.
                                We believe, either than a still photo, a video can communicate more. Through the profile
                                video you can introduce yourself, or you can dance, sing, talk something to your
                                listeners, or anything you are interested. This will help others to get more attached to
                                you. Although this is not mandatory, adding a video profile will make you stand out
                                among the crowd. You can add a ‘One Minute’ (Length should be Sixty seconds or less)
                                selfie video or professionally captured video. You can even add BGM to the video to
                                make it more attractive. It is also possible to remove the video instantly whenever you
                                want.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Purpose of Video Reels: We collect video reels from users solely for entertainment
                                purposes and to enhance user profiles. We believe that video reels offer a more
                                dynamic and genuine representation of our users compared to still photos.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                No Download or Copying: We understand the importance of protecting users&#39; content.
                                Therefore, we do not provide any option for downloading or copying video reels.
                                Opposite users or matches can only watch the video reel within the app; they cannot
                                download or copy it in any way.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                User Control: Users have full control over the content of their video reels. They can
                                choose to upload, edit, or remove their video reels at any time through their profile
                                settings.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Additional Information: If a user finds a video reel attractive and wishes to learn more
                                about the user, they can navigate to the user&#39;s profile for additional information.
                                However, they cannot download or copy the video reel.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Data Protection: We are committed to safeguarding your personal data, including
                                photos and video reels. We employ industry-standard security measures to protect
                                against unauthorized access, alteration, disclosure, or destruction of your information.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                We will not allow nude or morally questionable photos and videos. Such contents will be
                                removed without any prior warning. If anyone repeats such behavior their profiles will be
                                removed.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                When a user deletes their account, we completely remove all data, including login
                                details, personal information, photos, and videos from our server. We never retain this
                                data for future use.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Data Privacy
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                We collect your personal information’s, interests and choices, hobbies, academic,
                                occupation, and family details, concepts and preferences about life partners,
                                photographs via this application during the period of registration and between the
                                regular uses. The entire data we collect from you is only used for data analysis to
                                finding a right match for you.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Also, we collect your current location status to run the nearby feature in our app. This
                                feature will help you to find the matches nearby your location.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                We will not share any of your information with any other entity outside of Firstlook
                                website and mobile app, for advertising, marketing or other data analysis purposes.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                The moment you terminate your account from this application, all information about you
                                will be removed automatically from our database. We do not keep any information for
                                future in any reason.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding payment
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                This is a premium application. You can use our services for free for a short period of
                                time to get familiarized with the nature of our services. However, you need to get
                                paid membership to continue our service. You can do the payment via any digital
                                method such as ATM / Debit card / Credit Card / UPI etc. Kindly refer to payment
                                plans [ <span className='text-[#FC3657] font-medium'> www.firstlook.pro/pricing</span> ] for further details. You can also visit [
                                <span className='text-[#FC3657] font-medium'> www.firstlook.pro/helpcentre </span> ] or contact us [
                                <span className='text-[#FC3657] font-medium'> support@firstlook.pro</span> ] in case any queries or complaints.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding the removal of profile
                            </p>
                            <p className="sm:text-[21px] font-light mt-6 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we are unable to contact you on the number that you have provided, and
                                    thereby the verification process comes to a halt.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we have not received a valid ID proof within the specified time and thereby
                                    the verification process comes to a halt.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we find out that the data that you have given is erroneous and you refuse to
                                    rectify the errors.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you have uploaded someone else’s photo and refuse to remove that.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you upload any nude or morally questionable photos / videos in your profile.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3 '>If you don’t login to your account for more than 30 days, a notification
                                    message will be arranged. If we are unable to get a response, the profile will
                                    be hidden from the search list. If the profile is inactive even after 90 days, it
                                    will be removed automatically.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we confirm that you have already married.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you follow / stalk anyone using the details received from our application,
                                    despite their complaints.</span>
                            </p>
                            <p className="sm:text-[21px] font-light mt-3 text-justify ml-8">
                                <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you copy the photos or phone number from other profiles and share them
                                    via any print / electronic / digital media or social platforms, and we receive
                                    their complaints.</span>
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                All the above-mentioned scenarios are valid reason for your profile to get removed.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                If more than one profile of the same person is added, duplicate profiles will be
                                removed. If you continue to do so, the primary profile will also be removed without
                                warning.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Regarding Copyright and Trademark
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Our name Firstlook, and its logo, Tagline, Font, color theme are under trademark
                                registration. No matrimony, matchmaking, dating services, websites, mobile apps,
                                social media communities, accounts and pages, private / public groups, marriage
                                bureau, agencies, brokering firms can use our registered logos, taglines, or name,
                                exactly as it is or copied with little alterations with an intention to mimic the original
                                item. Without our specific consent, no one can use any of our contents for any
                                purpose.
                            </p>
                            <p className="text-[16px] sm:text-[30px] font-semibold mt-8">
                                Common Announcements
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                Our matchmaking services are only available via website and mobile application. It is
                                not available through a physical office space. We don’t publish any magazines or
                                printed booklets. Apart from our registered office located in Chennai, we don’t have
                                any other offices or branches. All the transactions can be done via online services
                                provided within our app (Firstlook) or website (www.firstlook.pro). You are hereby
                                advised not to follow any other payment methods apart from the services provided
                                within the application. We don’t have any agents, agencies, or franchisees. So, you
                                are advised not to take up any franchisees or do transactions with any agencies for
                                our services. This application, our parent company, owners, directors, investors,
                                management and staff members will have no responsibility over such issues.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                We provide a general data security. However, we can resolve issues instantly such
                                as data loss, security issues and app feature error’s that occur due to technical
                                issues. We can resolve issues due to Hacking or cyber-attacks etc. with the help of
                                existing legal remedies only. In order to resolve technical issues and legal
                                procedures, and to process updates, we will require a specific time. So, kindly bear
                                with us, during those times.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                A Firstlook Member shall not assign or transfer your membership / profile / account
                                to any other person or entity, and such an act shall be treated as a violation of our
                                terms and conditions, we should terminate your membership / profile / account
                                permanently without any refunds.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Kindly remember that you are using this application for a pristine idea of finding a
                                partner or to marriage. So, behave respectfully and accordingly. Kindly add correct
                                details and real photos in the profile.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                It will be better to send proposals and requests to interested parties and matching
                                profiles only.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Even you are premium member, you can&#39;t directly fetch the address details of any
                                matches. You can propose them via this application, or to initiate a chat with them.
                                This will help to know about their interest in you. If you are interested to grab the
                                contact details, you should send a request to them. Based on their permission only
                                you can fetch their contact details.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Remember to behave and speak in an educated and respectful manner. Avoid
                                unnecessary and untimely communications.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                While registering the profile, it is advisable to add the phone number of your family
                                members or parents as a secondary contact. Especially for women’s profiles.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Kindly inform us <span className='text-[#FC3657] font-semibold'>[ complaints@firstlook.pro ]</span> if any member behaves in an
                                inappropriate manner. Use the help of cyber cell or police if necessary.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                If anyone interested in your profile and invites you for a direct meeting, please select
                                a public place. Avoid meeting strangers in unusual or deserted places. Kindly view
                                this message as a precautionary warning in light of social issues such as violence
                                against women and honey trap.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                If anyone that you make contact through this application uses you for financial gains
                                in anyway, kindly refrain from such contacts. If you suffer from any losses due to
                                such contacts, you will be solely responsible.
                            </p>
                            <p className="sm:text-[21px] mt-2 text-justify font-light">
                                Use our application by honoring and abiding by our terms and conditions. We wish
                                you a happy search.
                            </p>
                            <p className="sm:text-[21px] mt-4 text-justify font-light">
                                With love and regards
                            </p>
                        </div>

                        <div className='mt-5 sm:block hidden'>
                            <svg width="105" height="19" viewBox="0 0 105 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5459 18H0.865234V5.15039H8.23047V7.38281H3.5459V10.6963H7.90527V12.9199H3.5459V18ZM10.7441 18V5.15039H13.4688V18H10.7441ZM20.4473 5.15039C21.6133 5.15039 22.5742 5.29102 23.3301 5.57227C24.0918 5.85352 24.6572 6.27832 25.0264 6.84668C25.3955 7.41504 25.5801 8.13281 25.5801 9C25.5801 9.58594 25.4688 10.0986 25.2461 10.5381C25.0234 10.9775 24.7305 11.3496 24.3672 11.6543C24.0039 11.959 23.6113 12.208 23.1895 12.4014L26.9688 18H23.9453L20.8779 13.0693H19.4277V18H16.7031V5.15039H20.4473ZM20.2539 7.38281H19.4277V10.8545H20.3066C21.209 10.8545 21.8535 10.7051 22.2402 10.4062C22.6328 10.1016 22.8291 9.65625 22.8291 9.07031C22.8291 8.46094 22.6182 8.02734 22.1963 7.76953C21.7803 7.51172 21.1328 7.38281 20.2539 7.38281ZM36.1709 14.4316C36.1709 15.1934 35.9863 15.8555 35.6172 16.418C35.248 16.9805 34.709 17.4141 34 17.7188C33.2969 18.0234 32.4414 18.1758 31.4336 18.1758C30.9883 18.1758 30.5518 18.1465 30.124 18.0879C29.7021 18.0293 29.2949 17.9443 28.9023 17.833C28.5156 17.7158 28.1465 17.5723 27.7949 17.4023V14.8711C28.4043 15.1406 29.0371 15.3838 29.6934 15.6006C30.3496 15.8174 31 15.9258 31.6445 15.9258C32.0898 15.9258 32.4473 15.8672 32.7168 15.75C32.9922 15.6328 33.1914 15.4717 33.3145 15.2666C33.4375 15.0615 33.499 14.8271 33.499 14.5635C33.499 14.2412 33.3906 13.9658 33.1738 13.7373C32.957 13.5088 32.6582 13.2949 32.2773 13.0957C31.9023 12.8965 31.4775 12.6826 31.0029 12.4541C30.7041 12.3135 30.3789 12.1436 30.0273 11.9443C29.6758 11.7393 29.3418 11.4902 29.0254 11.1973C28.709 10.9043 28.4482 10.5498 28.2432 10.1338C28.0439 9.71191 27.9443 9.20801 27.9443 8.62207C27.9443 7.85449 28.1201 7.19824 28.4717 6.65332C28.8232 6.1084 29.3242 5.69238 29.9746 5.40527C30.6309 5.1123 31.4043 4.96582 32.2949 4.96582C32.9629 4.96582 33.5986 5.04492 34.2021 5.20312C34.8115 5.35547 35.4473 5.57813 36.1094 5.87109L35.2305 7.98926C34.6387 7.74902 34.1084 7.56445 33.6396 7.43555C33.1709 7.30078 32.6934 7.2334 32.207 7.2334C31.8672 7.2334 31.5771 7.28906 31.3369 7.40039C31.0967 7.50586 30.915 7.6582 30.792 7.85742C30.6689 8.05078 30.6074 8.27637 30.6074 8.53418C30.6074 8.83887 30.6953 9.09668 30.8711 9.30762C31.0527 9.5127 31.3223 9.71191 31.6797 9.90527C32.043 10.0986 32.4941 10.3242 33.0332 10.582C33.6895 10.8926 34.249 11.2178 34.7119 11.5576C35.1807 11.8916 35.541 12.2871 35.793 12.7441C36.0449 13.1953 36.1709 13.7578 36.1709 14.4316ZM43.457 18H40.7324V7.41797H37.2432V5.15039H46.9463V7.41797H43.457V18Z" fill="#FE1940" />
                                <path d="M49.0645 18V5.15039H50.5586V16.6641H56.2627V18H49.0645ZM69.6133 11.5576C69.6133 12.5479 69.4873 13.4502 69.2354 14.2646C68.9834 15.0732 68.6084 15.7705 68.1104 16.3564C67.6182 16.9365 67.0059 17.3848 66.2734 17.7012C65.541 18.0176 64.6914 18.1758 63.7246 18.1758C62.7285 18.1758 61.8584 18.0176 61.1143 17.7012C60.376 17.3848 59.7607 16.9336 59.2686 16.3477C58.7822 15.7617 58.416 15.0615 58.1699 14.2471C57.9297 13.4326 57.8096 12.5303 57.8096 11.54C57.8096 10.2275 58.0264 9.07617 58.46 8.08594C58.8936 7.0957 59.5498 6.3252 60.4287 5.77441C61.3135 5.22363 62.4209 4.94824 63.751 4.94824C65.0225 4.94824 66.0918 5.2207 66.959 5.76562C67.832 6.31055 68.4912 7.07812 68.9365 8.06836C69.3877 9.05273 69.6133 10.2158 69.6133 11.5576ZM59.3828 11.5576C59.3828 12.6475 59.5381 13.5908 59.8486 14.3877C60.1592 15.1846 60.6338 15.7998 61.2725 16.2334C61.917 16.667 62.7344 16.8838 63.7246 16.8838C64.7207 16.8838 65.5352 16.667 66.168 16.2334C66.8066 15.7998 67.2783 15.1846 67.583 14.3877C67.8877 13.5908 68.04 12.6475 68.04 11.5576C68.04 9.89941 67.6914 8.60449 66.9941 7.67285C66.3027 6.73535 65.2217 6.2666 63.751 6.2666C62.7549 6.2666 61.9346 6.48047 61.29 6.9082C60.6455 7.33594 60.165 7.94531 59.8486 8.73633C59.5381 9.52148 59.3828 10.4619 59.3828 11.5576ZM83.623 11.5576C83.623 12.5479 83.4971 13.4502 83.2451 14.2646C82.9932 15.0732 82.6182 15.7705 82.1201 16.3564C81.6279 16.9365 81.0156 17.3848 80.2832 17.7012C79.5508 18.0176 78.7012 18.1758 77.7344 18.1758C76.7383 18.1758 75.8682 18.0176 75.124 17.7012C74.3857 17.3848 73.7705 16.9336 73.2783 16.3477C72.792 15.7617 72.4258 15.0615 72.1797 14.2471C71.9395 13.4326 71.8193 12.5303 71.8193 11.54C71.8193 10.2275 72.0361 9.07617 72.4697 8.08594C72.9033 7.0957 73.5596 6.3252 74.4385 5.77441C75.3232 5.22363 76.4307 4.94824 77.7607 4.94824C79.0322 4.94824 80.1016 5.2207 80.9688 5.76562C81.8418 6.31055 82.501 7.07812 82.9463 8.06836C83.3975 9.05273 83.623 10.2158 83.623 11.5576ZM73.3926 11.5576C73.3926 12.6475 73.5479 13.5908 73.8584 14.3877C74.1689 15.1846 74.6436 15.7998 75.2822 16.2334C75.9268 16.667 76.7441 16.8838 77.7344 16.8838C78.7305 16.8838 79.5449 16.667 80.1777 16.2334C80.8164 15.7998 81.2881 15.1846 81.5928 14.3877C81.8975 13.5908 82.0498 12.6475 82.0498 11.5576C82.0498 9.89941 81.7012 8.60449 81.0039 7.67285C80.3125 6.73535 79.2314 6.2666 77.7607 6.2666C76.7646 6.2666 75.9443 6.48047 75.2998 6.9082C74.6553 7.33594 74.1748 7.94531 73.8584 8.73633C73.5479 9.52148 73.3926 10.4619 73.3926 11.5576ZM95.752 18H93.9854L89.3535 11.751L87.9824 12.9814V18H86.4883V5.15039H87.9824V11.5576C88.3164 11.1768 88.6592 10.7988 89.0107 10.4238C89.3623 10.043 89.7109 9.65918 90.0566 9.27246L93.8096 5.15039H95.5586L90.4434 10.7227L95.752 18Z" fill="black" />
                                <path d="M98.165 5H97.667V1.15918H96.3105V0.716797H99.5215V1.15918H98.165V5ZM102.064 5L100.611 1.20312H100.588C100.615 1.50391 100.629 1.86133 100.629 2.27539V5H100.169V0.716797H100.919L102.275 4.25H102.299L103.667 0.716797H104.411V5H103.913V2.24023C103.913 1.92383 103.927 1.58008 103.954 1.20898H103.931L102.466 5H102.064Z" fill="black" />
                            </svg>
                        </div>
                        <div className='sm:hidden block mt-4'>
                            <svg width="96" height="15" viewBox="0 0 96 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5459 14H0.865234V1.15039H8.23047V3.38281H3.5459V6.69629H7.90527V8.91992H3.5459V14ZM10.7441 14V1.15039H13.4688V14H10.7441ZM20.4473 1.15039C21.6133 1.15039 22.5742 1.29102 23.3301 1.57227C24.0918 1.85352 24.6572 2.27832 25.0264 2.84668C25.3955 3.41504 25.5801 4.13281 25.5801 5C25.5801 5.58594 25.4688 6.09863 25.2461 6.53809C25.0234 6.97754 24.7305 7.34961 24.3672 7.6543C24.0039 7.95898 23.6113 8.20801 23.1895 8.40137L26.9688 14H23.9453L20.8779 9.06934H19.4277V14H16.7031V1.15039H20.4473ZM20.2539 3.38281H19.4277V6.85449H20.3066C21.209 6.85449 21.8535 6.70508 22.2402 6.40625C22.6328 6.10156 22.8291 5.65625 22.8291 5.07031C22.8291 4.46094 22.6182 4.02734 22.1963 3.76953C21.7803 3.51172 21.1328 3.38281 20.2539 3.38281ZM36.1709 10.4316C36.1709 11.1934 35.9863 11.8555 35.6172 12.418C35.248 12.9805 34.709 13.4141 34 13.7188C33.2969 14.0234 32.4414 14.1758 31.4336 14.1758C30.9883 14.1758 30.5518 14.1465 30.124 14.0879C29.7021 14.0293 29.2949 13.9443 28.9023 13.833C28.5156 13.7158 28.1465 13.5723 27.7949 13.4023V10.8711C28.4043 11.1406 29.0371 11.3838 29.6934 11.6006C30.3496 11.8174 31 11.9258 31.6445 11.9258C32.0898 11.9258 32.4473 11.8672 32.7168 11.75C32.9922 11.6328 33.1914 11.4717 33.3145 11.2666C33.4375 11.0615 33.499 10.8271 33.499 10.5635C33.499 10.2412 33.3906 9.96582 33.1738 9.7373C32.957 9.50879 32.6582 9.29492 32.2773 9.0957C31.9023 8.89648 31.4775 8.68262 31.0029 8.4541C30.7041 8.31348 30.3789 8.14355 30.0273 7.94434C29.6758 7.73926 29.3418 7.49023 29.0254 7.19727C28.709 6.9043 28.4482 6.5498 28.2432 6.13379C28.0439 5.71191 27.9443 5.20801 27.9443 4.62207C27.9443 3.85449 28.1201 3.19824 28.4717 2.65332C28.8232 2.1084 29.3242 1.69238 29.9746 1.40527C30.6309 1.1123 31.4043 0.96582 32.2949 0.96582C32.9629 0.96582 33.5986 1.04492 34.2021 1.20312C34.8115 1.35547 35.4473 1.57813 36.1094 1.87109L35.2305 3.98926C34.6387 3.74902 34.1084 3.56445 33.6396 3.43555C33.1709 3.30078 32.6934 3.2334 32.207 3.2334C31.8672 3.2334 31.5771 3.28906 31.3369 3.40039C31.0967 3.50586 30.915 3.6582 30.792 3.85742C30.6689 4.05078 30.6074 4.27637 30.6074 4.53418C30.6074 4.83887 30.6953 5.09668 30.8711 5.30762C31.0527 5.5127 31.3223 5.71191 31.6797 5.90527C32.043 6.09863 32.4941 6.32422 33.0332 6.58203C33.6895 6.89258 34.249 7.21777 34.7119 7.55762C35.1807 7.8916 35.541 8.28711 35.793 8.74414C36.0449 9.19531 36.1709 9.75781 36.1709 10.4316ZM43.457 14H40.7324V3.41797H37.2432V1.15039H46.9463V3.41797H43.457V14Z" fill="#FE1940" />
                                <path d="M49.0645 14V1.15039H50.5586V12.6641H56.2627V14H49.0645ZM69.6133 7.55762C69.6133 8.54785 69.4873 9.4502 69.2354 10.2646C68.9834 11.0732 68.6084 11.7705 68.1104 12.3564C67.6182 12.9365 67.0059 13.3848 66.2734 13.7012C65.541 14.0176 64.6914 14.1758 63.7246 14.1758C62.7285 14.1758 61.8584 14.0176 61.1143 13.7012C60.376 13.3848 59.7607 12.9336 59.2686 12.3477C58.7822 11.7617 58.416 11.0615 58.1699 10.2471C57.9297 9.43262 57.8096 8.53027 57.8096 7.54004C57.8096 6.22754 58.0264 5.07617 58.46 4.08594C58.8936 3.0957 59.5498 2.3252 60.4287 1.77441C61.3135 1.22363 62.4209 0.948242 63.751 0.948242C65.0225 0.948242 66.0918 1.2207 66.959 1.76562C67.832 2.31055 68.4912 3.07812 68.9365 4.06836C69.3877 5.05273 69.6133 6.21582 69.6133 7.55762ZM59.3828 7.55762C59.3828 8.64746 59.5381 9.59082 59.8486 10.3877C60.1592 11.1846 60.6338 11.7998 61.2725 12.2334C61.917 12.667 62.7344 12.8838 63.7246 12.8838C64.7207 12.8838 65.5352 12.667 66.168 12.2334C66.8066 11.7998 67.2783 11.1846 67.583 10.3877C67.8877 9.59082 68.04 8.64746 68.04 7.55762C68.04 5.89941 67.6914 4.60449 66.9941 3.67285C66.3027 2.73535 65.2217 2.2666 63.751 2.2666C62.7549 2.2666 61.9346 2.48047 61.29 2.9082C60.6455 3.33594 60.165 3.94531 59.8486 4.73633C59.5381 5.52148 59.3828 6.46191 59.3828 7.55762ZM83.623 7.55762C83.623 8.54785 83.4971 9.4502 83.2451 10.2646C82.9932 11.0732 82.6182 11.7705 82.1201 12.3564C81.6279 12.9365 81.0156 13.3848 80.2832 13.7012C79.5508 14.0176 78.7012 14.1758 77.7344 14.1758C76.7383 14.1758 75.8682 14.0176 75.124 13.7012C74.3857 13.3848 73.7705 12.9336 73.2783 12.3477C72.792 11.7617 72.4258 11.0615 72.1797 10.2471C71.9395 9.43262 71.8193 8.53027 71.8193 7.54004C71.8193 6.22754 72.0361 5.07617 72.4697 4.08594C72.9033 3.0957 73.5596 2.3252 74.4385 1.77441C75.3232 1.22363 76.4307 0.948242 77.7607 0.948242C79.0322 0.948242 80.1016 1.2207 80.9688 1.76562C81.8418 2.31055 82.501 3.07812 82.9463 4.06836C83.3975 5.05273 83.623 6.21582 83.623 7.55762ZM73.3926 7.55762C73.3926 8.64746 73.5479 9.59082 73.8584 10.3877C74.1689 11.1846 74.6436 11.7998 75.2822 12.2334C75.9268 12.667 76.7441 12.8838 77.7344 12.8838C78.7305 12.8838 79.5449 12.667 80.1777 12.2334C80.8164 11.7998 81.2881 11.1846 81.5928 10.3877C81.8975 9.59082 82.0498 8.64746 82.0498 7.55762C82.0498 5.89941 81.7012 4.60449 81.0039 3.67285C80.3125 2.73535 79.2314 2.2666 77.7607 2.2666C76.7646 2.2666 75.9443 2.48047 75.2998 2.9082C74.6553 3.33594 74.1748 3.94531 73.8584 4.73633C73.5479 5.52148 73.3926 6.46191 73.3926 7.55762ZM95.752 14H93.9854L89.3535 7.75098L87.9824 8.98145V14H86.4883V1.15039H87.9824V7.55762C88.3164 7.17676 88.6592 6.79883 89.0107 6.42383C89.3623 6.04297 89.7109 5.65918 90.0566 5.27246L93.8096 1.15039H95.5586L90.4434 6.72266L95.752 14Z" fill="black" />
                            </svg>
                        </div>
                    </section>
                </div>
            </div >
        </>
    )
}

export default TermsOfUse