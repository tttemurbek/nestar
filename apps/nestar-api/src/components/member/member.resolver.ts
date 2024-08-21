import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { InternalServerErrorException, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	@UsePipes(ValidationPipe) // validation qiladi
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		try {
			console.log('Mutation: Signup');
			console.log('input:', input);
			return this.memberService.signup(input);
		} catch (err) {
			console.log('ERROR, SIGNUP:', err);
			throw new InternalServerErrorException(err);
		}
	}

	@Mutation(() => Member)
	@UsePipes(ValidationPipe) // validation qiladi
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		try {
			console.log('Mutation: login');
			console.log('input:', input);

			return this.memberService.login(input);
		} catch (err) {
			console.log('ERROR, SIGNUP:', err);
			throw new InternalServerErrorException(err);
		}
	}

	@Mutation(() => String)
	public async updateMember(): Promise<string> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}

	@Query(() => String)
	public async getMember(): Promise<string> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}
}
