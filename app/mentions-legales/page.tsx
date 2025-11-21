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
              Siège social : 45 Avenue des Champs-Élysées, 75008 Paris<br />
              RCS Paris : 912 345 678<br />
              SIRET : 912 345 678 00012<br />
              TVA Intracommunautaire : FR 12 912345678
            </p>
            <p>
              Directeur de la publication : Thomas Durand<br />
              Email : contact@glassup.fr<br />
              Téléphone : 01 89 70 71 22
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis<br />
              Site web : vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
              est la propriété exclusive de GlassUp SAS ou de ses partenaires. Toute reproduction,
              représentation, modification, publication, transmission, dénaturation, totale ou partielle
              du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit,
              est interdite sans l&apos;autorisation écrite préalable de GlassUp SAS.
            </p>
            <p>
              La marque GlassUp et son logo sont des marques déposées auprès de l&apos;INPI. Toute reproduction totale ou
              partielle de ces marques sans autorisation expresse est prohibée au sens de l&apos;article L.713-2
              du Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès,
              de rectification, de suppression, de limitation et d&apos;opposition au traitement de vos
              données personnelles.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question sur le traitement de vos données,
              vous pouvez nous contacter à : dpo@glassup.fr
            </p>
            <p>
              Pour plus d&apos;informations sur la gestion de vos données personnelles, consultez notre{' '}
              <Link href="/confidentialite" className="text-[#00A8E1] hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies</h2>
            <p>
              Le site GlassUp utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser
              le trafic. En continuant à naviguer sur ce site, vous acceptez l&apos;utilisation de cookies
              conformément à notre politique de cookies. Vous pouvez à tout moment modifier vos
              préférences depuis les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation de responsabilité</h2>
            <p>
              GlassUp SAS s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées
              sur ce site. Toutefois, GlassUp SAS ne peut garantir l&apos;exactitude, la précision ou
              l&apos;exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              GlassUp SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission
              portant sur des informations disponibles sur ce site, ainsi que pour tous dommages résultant
              d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige,
              et après tentative de recherche d&apos;une solution amiable, les tribunaux de Paris seront
              seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :<br /><br />
              <strong>GlassUp SAS</strong><br />
              45 Avenue des Champs-Élysées<br />
              75008 Paris<br />
              Email : contact@glassup.fr<br />
              Téléphone : 01 89 70 71 22
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-[#00A8E1] hover:underline inline-flex items-center gap-2"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
