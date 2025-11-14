<template>
	<div class="flex flex-col gap-4">
		<!-- <br />
		1 weekly Quotes
		<br />
		1 weekly_philosophy
		<br />3 reviews
		<br />

		<h1>Website introduction.</h1> -->

		<UBadge size="xl" class="mx-4">
			This is an introduction text. Alex's website introduction will go
			over here. I am writing this so make sense of space to be occupied
			of the element. Alex will write a proper introduction over here.
			Again, just writing some nonsense to mimic the length of an actual
			introduction paragraph.
		</UBadge>

		<div class="flex flex-col gap-4 mx-4 md:flex-row">
			<UCard class="flex-1 h-60 bg-accented">
				<template #header>
					<h1 class="font-semibold">Weekly Quote</h1>
				</template>
				<p class="text-2xl font-semibold">
					The pen is mightier than the sword.
				</p>
				<template #footer>
					<p class="text-sm">Edward Bulwer-Lytton</p>
				</template>
			</UCard>

			<UCard class="flex-1 h-60 bg-accented">
				<template #header>
					<h1 class="font-semibold">Weekly Philosophy</h1>
				</template>
				<p class="text-2xl font-semibold">
					Success is not final, failure is not fatal; it is the
					courage to continue that counts.
				</p>
				<template #footer>
					<p class="text-sm">Winston Churchill</p>
				</template>
			</UCard>
		</div>

		<!-- Marquee Testimonial -->

		<UBadge class="mx-4 flex justify-center text-2xl mt-4"
			>Success Stories</UBadge
		>
		<UMarquee
			pause-on-hover
			:overlay="false"
			:ui="{
				root: '[--gap:--spacing(4)] [--duration:35s]',
				content: 'w-auto py-1',
			}"
			class="m-4 bg-muted mt-0"
		>
			<UPageCard
				v-for="(testimonial, index) in testimonials"
				:key="index"
				variant="subtle"
				:description="testimonial.quote"
				:ui="{
					description:
						'before:content-[open-quote] after:content-[close-quote] line-clamp-3 text-base',
				}"
				class="w-64 shrink-0 bg-elevated h-40"
			>
				<template #footer>
					<UUser
						v-bind="testimonial.user"
						size="xl"
						:ui="{ description: 'line-clamp-1' }"
					/>
				</template>
			</UPageCard>
		</UMarquee>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo vitae
			porro illum nulla est ipsa nisi accusantium distinctio optio
			doloremque. Animi eligendi in debitis, cupiditate repudiandae sit
			laudantium deserunt placeat. Magnam porro praesentium labore, quam
			eveniet voluptatum facere ut corrupti quae illo sit veniam ab
			ducimus odit consectetur dolore esse laborum deleniti ad rem, fuga
			modi, quibusdam similique! Minima, nisi! Sit nisi, necessitatibus
			fugit quis commodi exercitationem rem quae sint, in provident alias?
			Soluta consectetur fuga in eos ducimus enim harum. Vitae eaque qui
			vero. Veniam vitae quidem unde ipsam. Id odit quibusdam placeat
			tenetur fugiat quasi natus quod, incidunt vel quae architecto neque
			tempore dolores illo totam eum eligendi maxime. Voluptate nemo quia
			fugiat a commodi inventore, facilis nobis. Enim maiores architecto
			dolor vel asperiores atque ea, accusantium ullam at voluptas tempore
			nemo temporibus perspiciatis aspernatur inventore, sunt sequi aut
			mollitia eius nesciunt excepturi eveniet quas. Laboriosam, commodi
			perspiciatis? Dignissimos possimus ea deserunt quasi eius magni
			expedita ipsa nesciunt, soluta nulla doloribus neque nemo minus
			rerum doloremque natus magnam odio maxime cumque enim vel eveniet
			qui corporis pariatur. Dolorem. Quam fuga ab tenetur vel neque
			maiores libero harum officia obcaecati asperiores rerum recusandae
			enim quod nostrum quae quidem, facere eius voluptas. Aperiam, sint
			tempora odio iste necessitatibus voluptatem animi? Provident quia
			quaerat, sit dicta iure, delectus possimus quam itaque, quae
			accusantium eius consequuntur consequatur aspernatur aliquam!
			Aperiam, adipisci ipsam porro unde exercitationem magni ipsa odit
			veritatis, illum quasi ipsum? Excepturi amet corrupti quos adipisci
			quasi temporibus minus dicta consequuntur, unde ex quis magni quia
			eum debitis! Soluta, vel? Dolore, praesentium! Et optio consectetur
			ab dignissimos, sint harum porro veritatis! Asperiores porro facilis
			accusantium adipisci ut eos est itaque, assumenda tempore
			consequatur ullam sed eum, ex cupiditate iure quia cum provident
			fugiat eveniet? Aliquid aspernatur, porro eaque et quam error. Eius,
			voluptate praesentium veritatis quaerat repudiandae sequi modi
			soluta veniam reiciendis alias labore, incidunt nihil optio! Sint
			totam cumque quos fuga vero! Atque, expedita doloribus saepe amet
			eum numquam quibusdam. Iste dolorum quae repellat eligendi suscipit
			nostrum animi aut quasi aperiam, deserunt minus architecto
			consequuntur eveniet ad aliquam, libero autem, neque necessitatibus
			in accusamus inventore ullam soluta ex! Eligendi, esse? Minus vero
			rerum facilis corporis minima atque hic dolorem explicabo asperiores
			amet. Laudantium quas voluptatibus vero quo facilis pariatur tempora
			modi voluptas et in nisi, numquam ullam praesentium cumque
			accusamus. Veritatis quaerat quidem, pariatur numquam ipsum porro
			necessitatibus aliquam officiis culpa rerum iste incidunt non
			ratione harum perferendis magnam iusto ducimus velit voluptates
			asperiores assumenda quis, tempore ex. Velit, error! Ducimus
			delectus sequi deleniti suscipit ipsa ad, qui error dolorum nemo. In
			fugit earum sequi voluptas totam ullam perferendis consectetur vero,
			neque minima velit, quia commodi aperiam? Vel, minima incidunt!
			Possimus incidunt dolores quidem, architecto culpa doloribus
			nesciunt voluptates hic ab maxime officiis tempora quisquam sed
			minima cum sit consequatur! Consequuntur fuga quod alias repudiandae
			id nam deserunt distinctio illo. Pariatur vero itaque amet soluta
			iure commodi nulla dolores. Nam sunt sint eius ipsam consequuntur
			neque ex asperiores a beatae, aperiam, eveniet voluptatum, magni
			atque! Modi optio illum perferendis enim. Consequatur nesciunt
			veniam praesentium iusto unde, voluptate quisquam cum omnis ullam
			vitae necessitatibus, quibusdam expedita ipsum nam voluptates soluta
			laborum quia officia doloremque labore adipisci. Repellat et odit
			necessitatibus officiis. Perferendis, voluptatem explicabo amet qui
			rerum totam nobis officia quo dolorem sed enim, exercitationem
			provident veniam nesciunt harum sunt impedit fugiat eaque
			perspiciatis accusamus blanditiis nemo corporis. Animi, sit ea.
			Error cumque accusantium dolore expedita veritatis officiis sequi
			veniam perspiciatis exercitationem maiores? Quaerat, voluptatum
			dolorem provident voluptatem rerum magnam voluptas quae sed atque
			dolores omnis aut ea neque modi impedit? Aut magnam nemo, similique
			explicabo atque consequatur corporis repellendus voluptates
			distinctio eligendi dolorem. Excepturi sunt neque explicabo, sed
			accusamus qui, ipsam quisquam possimus nisi libero enim dolore
			tenetur, repudiandae ad? Ab, vero eum! Quis hic iure officiis
			tenetur vero sint voluptatem, consequuntur aut eligendi,
			perspiciatis corporis omnis enim, illum dolorem? Impedit tempora
			distinctio esse nulla inventore, quas error sunt obcaecati. Ipsam
			dolorum aspernatur quisquam saepe vero esse optio. Odit molestiae
			at, rem alias aliquid ea, minus excepturi fugit magnam dolorem
			perferendis culpa deleniti delectus, veniam voluptates architecto
			repellendus explicabo natus. Velit saepe porro et, asperiores fuga
			id culpa quas! Laborum aperiam molestiae ea eligendi, nihil cum
			vitae consequatur maxime officia itaque cumque omnis sit dicta saepe
			earum aspernatur culpa natus. Tenetur, libero ipsum qui pariatur
			ipsam velit. Officia maxime temporibus voluptates debitis, in velit
			accusantium totam nostrum. Natus vero atque odio voluptates ea eaque
			sapiente sit, quaerat omnis? Explicabo, magni. Ex maxime voluptas
			praesentium veritatis necessitatibus architecto quaerat. Hic
			similique tenetur, nihil omnis nobis quos maiores laudantium sint
			sed nemo, ratione, perspiciatis nisi suscipit provident eaque
			commodi facilis voluptatibus numquam! Modi qui facere ipsam, quis
			praesentium assumenda optio inventore, possimus corporis, sapiente
			veniam! Ea asperiores corrupti dolore mollitia accusamus magnam hic
			consequatur molestiae nihil aspernatur. Dolorem adipisci ullam
			expedita. Molestias. Voluptates est vel tenetur corporis repellendus
			accusamus ea, porro totam quia non necessitatibus unde sunt minus a
			amet expedita dolor repudiandae facilis eligendi inventore! Maxime
			debitis fugit officia ducimus veritatis. Ex quis facilis sunt
			temporibus similique. Omnis iure eaque quod aperiam a porro commodi
			beatae temporibus pariatur asperiores, laudantium reprehenderit
			sequi qui harum unde nemo, culpa sit magni optio impedit. Ratione
			quisquam eaque aut reiciendis veritatis similique reprehenderit,
			minus dolorum at pariatur error aspernatur provident nihil vitae
			tempora atque ad rerum iste corrupti sunt. Inventore laboriosam
			magnam quos a provident.
		</p>
	</div>
</template>

<script lang="ts">
import type { UserProps } from "@nuxt/ui";

interface Testimonial {
	user: UserProps;
	quote: string;
}

export default {
	data() {
		return {
			testimonials: [
				{
					user: {
						name: "Michael Chen",
						description: "",
					},
					quote: "Transformed my mindset from fixed to growth in just weeks.",
				},
				{
					user: {
						name: "David Thompson",
						description: "",
					},
					quote: "Finally achieved work-life balance after years of struggling.",
				},
				{
					user: {
						name: "James Wilson",
						description: "",
					},
					quote: "Went from unsure to unstoppable with the right guidance.",
				},
				{
					user: {
						name: "Sarah Johnson",
						description: "",
					},
					quote: "Alex helped me find clarity and purpose I never knew I had.",
				},
			] as Testimonial[],
		};
	},
};
</script>

<style scoped></style>
