import {resend} from "../lib/resend";
import {ApiResponse} from "../types/ApiResponse";
import VerificationEmail from "../../emails/VerificationEmail";

export default async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Lucky Message | Verification code',
            react: VerificationEmail({username, otp:verifyCode}),
          });
        return{success: true, message:"verification eamil send successfully"}
    } catch (emailError) {
        console.error("Error when sending verification code", emailError)
        return{success: false, message:"Failed to send verification eamil"}
    }
}