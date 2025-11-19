import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Mentions légales - GlassUp',
  description: 'Mentions légales de la plateforme GlassUp',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#0F171E]">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="GlassUp"
              width={150}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Éditeur du site</h2>
            <p>
              Le site GlassUp est édité par :<br />
              <strong>GlassUp SAS</strong><br />
              Société par Actions Simplifiée au capital de 10 000 €<br />
              Siège social : [Adresse à compléter]<br />
              RCS : [Numéro à compléter]<br />
              SIRET : [Numéro à compléter]<br />
              TVA Intracommunautaire : [Numéro à compléter]
            </p>
            <p>
              Directeur de la publication : [Nom à compléter]<br />
              Email : contact@glassup.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
              est la propriété exclusive de GlassUp SAS ou de ses partenaires. Toute reproduction,
              représentation, modification, publication, transmission, dénaturation, totale ou partielle
              du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit,
              est interdite sans l'autorisation écrite préalable de GlassUp SAS.
            </p>
            <p>
              La marque GlassUp et son logo sont des marques déposées. Toute reproduction totale ou
              partielle de ces marques sans autorisation expresse est prohibée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression,
              de limitation et d'opposition au traitement de vos données personnelles.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question sur le traitement de vos données,
              vous pouvez nous contacter à : dpo@glassup.fr
            </p>
            <p>
              Pour plus d'informations sur la gestion de vos données personnelles, consultez notre{' '}
              <Link href="/confidentialite" className="text-[#00A8E1] hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies</h2>
            <p>
              Le site GlassUp utilise des cookies pour améliorer l'expérience utilisateur et analyser
              le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies
              conformément à notre politique de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation de responsabilité</h2>
            <p>
              GlassUp SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées
              sur ce site. Toutefois, GlassUp SAS ne peut garantir l'exactitude, la précision ou
              l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              GlassUp SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission
              portant sur des informations disponibles sur ce site, ainsi que pour tous dommages résultant
              d'une intrusion frauduleuse d'un tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br />
              Email : contact@glassup.fr
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-[#00A8E1] hover:underline inline-flex items-center gap-2"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
